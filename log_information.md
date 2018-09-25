#Milestone
1. Set up ubuntu server including DHCP reserved, port #22 and #1309 forwarding and X11 library setup and so on. (DONE)
2. Learn how to build a HPS-based project and how to control PIO read/write. (DONE)
3. Leave all controllers unused instead of UART and insert SW, LEDR, HEX0-5, assign the default address in device tree. Test if all IO devices can be read/write.
    1) generate preloader (DONE)
    2) generate device tree (DONE)
4. 1) optimize HEX IP, make it more easier to read and write data
    2) make a prject to access pin from HPS to FPGA to check I2C, Eth, USB pin assignment is correct.
5. Test every IO device works in assigned address when reading and writing (DONE)
6. Make a scipt to be run on server. Purpose: transfer rbf file to HPS OS; receive output signals; reprogram FPGA portion; quene system;
7. make GUI in PC interface (DONE)
8. Solve the admin and user rights to access the server
9. License built and official document writing
10. work out how to transfer information from VGA pin, VGA IP forms X11 graphics to transfer to individual PC

mount /dev/mmcblk0p1 /media/fat/
echo 0 > /sys/class/fpga-bridge/fpga2hps/enable
echo 0 > /sys/class/fpga-bridge/hps2fpga/enable
echo 0 > /sys/class/fpga-bridge/lwhps2fpga/enable
dd if=/media/fat/soc_system.rbf of=/dev/fpga0 bs=1M
echo 1 > /sys/class/fpga-bridge/fpga2hps/enable
echo 1 > /sys/class/fpga-bridge/hps2fpga/enable
echo 1 > /sys/class/fpga-bridge/lwhps2fpga/enable
