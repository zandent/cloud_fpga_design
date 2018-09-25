#! /usr/bin/python3
import tkinter
import math
class o_GUI:
    def __init__(self, master):
        self.master = master
        master.title("Start_Cloud_Output")
        self.check_button = tkinter.Button(master, text="Let's Check", command=self.parse)
        self.check_button.pack()
        self.ledr_frame = tkinter.Frame(master)
        self.ledr_frame.pack()
        self.ledr_var = [0]*10
        self.ledr3_button = tkinter.Button(self.ledr_frame,  bg = "white", activebackground = "white",text="LEDR 3")
        self.ledr3_button.pack(side=tkinter.LEFT)
        self.ledr2_button = tkinter.Button(self.ledr_frame, bg = "white", activebackground = "white", text="LEDR 2")
        self.ledr2_button.pack(side=tkinter.LEFT)
        self.ledr1_button = tkinter.Button(self.ledr_frame, bg = "white", activebackground = "white", text="LEDR 1")
        self.ledr1_button.pack(side=tkinter.LEFT)
        self.ledr0_button = tkinter.Button(self.ledr_frame, bg = "white", activebackground = "white", text="LEDR 0")
        self.ledr0_button.pack(side=tkinter.LEFT)

        self.close_button = tkinter.Button(master, text="Close", command=master.quit)
        self.close_button.pack()
            #self.ledr0_button.configure(bg = "white",activebackground = "white")
    def parse(self):
        prev_data = "0,0,0,0,0S0,0,0,0,0S0,0,0,0,0S0,0,0,0,0S0,0,0,0,0"
        while(1):
            f_read = open("temp.txt","r")
            data = f_read.read()
            while(prev_data==data):
                f_read.close()
                f_read = open("temp.txt","r")
                data = f_read.read()
            f_read.close()
            data_S = data.split('S')
            prev_data_S = prev_data.split('S')
            print (data_S)
            for i in range (3,4):
                temp_data = data_S[i].split(',')
                prev_temp_data = prev_data_S[i].split(',')
                #print (temp_data, " + " , prev_temp_data)
                ledr_data = int(temp_data[2]) - int(prev_temp_data[2])
                print(ledr_data)
                if ledr_data>0 :
                    index = math.log(ledr_data,2)
                    index_data = 1
                    self.change_ledr_state(index,index_data)
                elif ledr_data < 0:
                    index = math.log(-1*ledr_data,2)
                    index_data = 0
                    self.change_ledr_state(index,index_data)
                else:
                    index = -1
                    index_data = -1
            prev_data = data
    def change_ledr_state(self,index,index_data):
        if index==0:
            if index_data==1:
                self.ledr0_button.configure(bg = "red",activebackground = "red")
            else:
                self.ledr0_button.configure(bg = "white",activebackground = "white")
        elif index==1:
            if index_data==1:
                self.ledr1_button.configure(bg = "red",activebackground = "red")
            else:
                self.ledr1_button.configure(bg = "white",activebackground = "white")
        elif index==2:
            if index_data==1:
                self.ledr2_button.configure(bg = "red",activebackground = "red")
            else:
                self.ledr2_button.configure(bg = "white",activebackground = "white")
        elif index==3:
            if index_data==1:
                self.ledr3_button.configure(bg = "red",activebackground = "red")
            else:
                self.ledr3_button.configure(bg = "white",activebackground = "white")
    
def main():
    root_output = tkinter.Tk()
    gui_output = o_GUI(root_output)
    root_output.mainloop()
    

if __name__=="__main__":
    main()