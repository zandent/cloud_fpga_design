#! /usr/bin/python3
import tkinter
class i_GUI:
    def __init__(self, master):
        self.master = master
        master.title("Start_Cloud_Input")

        self.label = tkinter.Label(master, text="Upload your FPGA project in binary file (.rbf)")
        self.label.pack()

        self.upload_button = tkinter.Button(master, text="Upload", command=self.upload)
        self.upload_button.pack()

        self.sw_frame = tkinter.Frame(master)
        self.sw_frame.pack()
        self.sw_var = [0]*10
        self.sw3_button = tkinter.Button(self.sw_frame, text="SW 3", bg = "white", activebackground = "white", command=self.change_color_SW3)
        self.sw3_button.pack(side=tkinter.LEFT)
        self.sw2_button = tkinter.Button(self.sw_frame, text="SW 2", bg = "white", activebackground = "white", command=self.change_color_SW2)
        self.sw2_button.pack(side=tkinter.LEFT)
        self.sw1_button = tkinter.Button(self.sw_frame, text="SW 1", bg = "white", activebackground = "white", command=self.change_color_SW1)
        self.sw1_button.pack(side=tkinter.LEFT)
        self.sw0_button = tkinter.Button(self.sw_frame, text="SW 0", bg = "white", activebackground = "white", command=self.change_color_SW0)
        self.sw0_button.pack(side=tkinter.LEFT)

        self.ledr0_button = tkinter.Button(master, text="LEDR 0", command=self.upload)
        self.ledr0_button.pack(side=tkinter.RIGHT)
        self.ledr1_button = tkinter.Button(master, text="LEDR 1", command=self.upload)
        self.ledr1_button.pack(side=tkinter.RIGHT)
        self.ledr2_button = tkinter.Button(master, text="LEDR 2", command=self.upload)
        self.ledr2_button.pack(side=tkinter.RIGHT)
        self.ledr3_button = tkinter.Button(master, text="LEDR 3", command=self.upload)
        self.ledr3_button.pack(side=tkinter.RIGHT)

        self.close_button = tkinter.Button(master, text="Close", command=master.quit)
        self.close_button.pack()

    def upload(self):
        print("Greetings!")
    def change_color_SW3(self):
        index = 3
        if self.sw_var[index]==0:
            self.sw_var[index] = 1
            self.sw3_button.configure(bg = "red",activebackground = "red")
        else:
            self.sw_var[index] = 0
            self.sw3_button.configure(bg = "white",activebackground = "white")
        print(self.sw_var)
    def change_color_SW2(self):
        index = 2
        if self.sw_var[index]==0:
            self.sw_var[index] = 1
            self.sw2_button.configure(bg = "red",activebackground = "red")
        else:
            self.sw_var[index] = 0
            self.sw2_button.configure(bg = "white",activebackground = "white")
        print(self.sw_var)
    def change_color_SW1(self):
        index = 1
        if self.sw_var[index]==0:
            self.sw_var[index] = 1
            self.sw1_button.configure(bg = "red",activebackground = "red")
        else:
            self.sw_var[index] = 0
            self.sw1_button.configure(bg = "white",activebackground = "white")
        print(self.sw_var)
    def change_color_SW0(self):
        index = 0
        if self.sw_var[index]==0:
            self.sw_var[index] = 1
            self.sw0_button.configure(bg = "red",activebackground = "red")
        else:
            self.sw_var[index] = 0
            self.sw0_button.configure(bg = "white",activebackground = "white")
        print(self.sw_var)



class o_GUI:
    def __init__(self, master):
        self.master = master
        master.title("Start_Cloud_Output")

        self.ledr_frame = tkinter.Frame(master)
        self.ledr_frame.pack()
        self.ledr3_button = tkinter.Button(master, text="LEDR 3")
        self.ledr3_button.pack(side=tkinter.LEFT)
        self.ledr2_button = tkinter.Button(master, text="LEDR 2")
        self.ledr2_button.pack(side=tkinter.LEFT)
        self.ledr1_button = tkinter.Button(master, text="LEDR 1")
        self.ledr1_button.pack(side=tkinter.LEFT)
        self.ledr0_button = tkinter.Button(master, text="LEDR 0")
        self.ledr0_button.pack(side=tkinter.LEFT)

        self.close_button = tkinter.Button(master, text="Close", command=master.quit)
        self.close_button.pack()

    def change_ledr_state(self):
        while(1):
            print("change state")
            #self.ledr0_button.configure(bg = "white",activebackground = "white")


def parse():
    f_read = open("temp.txt","r")
    data = f_read.read()
    print (data.split('S'))
    
def main():
    parse()
    root_input = tkinter.Tk()
    gui_input = i_GUI(root_input)
    root_input.mainloop()
    

if __name__=="__main__":
    main()