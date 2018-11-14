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

