#! /usr/bin/python3
def parse():
    prev_data_S = "-1,-1,-1,-1,-1"
    prev_none_vga_data = "0"
    while(1):
        f_read = open("temp.txt","r")
        data = f_read.read()
        f_read.close()
        data_S = data.split('S')
        if(len(data_S)>2):
            none_vga_data = data_S[2].split('T')
            while ( len(data_S)<=2 or data_S[2] == prev_data_S or (none_vga_data[0] == prev_none_vga_data and data_S[len(data_S)-1]=='0')):
                f_read = open("temp.txt","r")
                data = f_read.read()
                f_read.close()
                data_S = data.split('S')
            temp_data = data_S[2].split(',')
            prev_data = prev_data_S.split(',')
            prev_none_vga_data = none_vga_data[0]
            if(temp_data[0]!=prev_data[0]):
                f_hex5_3 = open("hex5_3.txt","w")
                f_hex5_3.write(temp_data[0])
                f_hex5_3.close()
                print ("update hex 5,4,3")
            if(temp_data[1]!=prev_data[1]):
                f_hex2_0 = open("hex2_0.txt","w")
                f_hex2_0.write(temp_data[1])
                f_hex2_0.close()
                print ("update hex 2,1,0")
            if(temp_data[2]!=prev_data[2]):
                f_ledr = open("ledr.txt","w")
                f_ledr.write(temp_data[2])
                f_ledr.close()
                print ("update ledr")
            if(temp_data[5]!=prev_data[5]):
                f_ledr = open("vga_user.txt","w")
                f_ledr.write(temp_data[5])
                f_ledr.close()
                print ("update vga_user")
            prev_data_S = data_S[2]
        else:
            print("Read error and app is parsing again")

def main():
    parse()

if __name__=="__main__":
    main()