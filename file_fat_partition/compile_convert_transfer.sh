#export PATH=$PATH:~/intelFPGA_lite/intelFPGA_lite/18.0/quartus/bin/
cd ~/start_cloud_official_project
quartus_map start_cloud_top_level | tee ~/compile.log
quartus_fit start_cloud_top_level | tee ~/compile.log
quartus_asm start_cloud_top_level | tee ~/compile.log
quartus_cpf -c output_files/start_cloud_top_level.sof user_mode.rbf
cd ~/cloud_fpga/receive_file/
scp ~/start_cloud_official_project/user_mode.rbf root@10.0.0.2:~/
echo 0
ssh root@10.0.0.2 "ps | grep read_key_pio | grep -v grep | awk '{print $1}' | xargs kill"
#ssh root@10.0.0.2 "ps"
echo 1
ssh root@10.0.0.2 "ps | grep read_sw_pio | grep -v grep | awk '{print $1}' | xargs kill"
#ssh root@10.0.0.2 "ps"
echo 2
ps | grep sw_sender | grep -v grep | awk '{print $1}' | xargs kill
echo 3
ps | grep key_sender | grep -v grep | awk '{print $1}' | xargs kill
echo 4
ps | grep parse.py | grep -v grep | awk '{print $1}' | xargs kill
echo 5
ps | grep receiver | grep -v grep | awk '{print $1}' | xargs kill
echo 6
ssh root@10.0.0.2 "ps | grep write_pio | grep -v grep | awk '{print $1}' | xargs kill"
echo 7
#ps | grep ssh | grep -v grep | awk '{print $1}' | xargs kill -9
echo 8
#echo wait1second
#sleep 1
#echo pgmStart
#ssh root@10.0.0.2 "ps"
ssh root@10.0.0.2 '~/program_fpga/pgm_fpga.sh'
echo wait1second
sleep 1
echo appStart
#ps
ssh root@10.0.0.2 '~/read_write_fpga_folder/write_pio' &
sleep 1
echo done1
./receiver &
sleep 1
echo done2
./parse.py &
sleep 1
echo done3
./sw_sender &
sleep 1
echo done4
./key_sender &
sleep 1
echo done5
ssh root@10.0.0.2 '~/read_write_fpga_folder/read_sw_pio' &
sleep 1
echo done6
ssh root@10.0.0.2 '~/read_write_fpga_folder/read_key_pio' &
echo done7

