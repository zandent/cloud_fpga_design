#include <stdio.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <errno.h>
#include <string.h>
#include <sys/types.h>
#include <netdb.h>
#include <time.h>
/*
#define SW 0x00000040
#define LED 0x00000000
#define HEX2_0 0x00000020
#define HEX5_3 0x00000030
#define KEY 0x00000050
*/
#define SW 0x00000010
#define LED 0x00000000
#define HEX2_0 0x00000030
#define HEX5_3 0x00000040
#define KEY 0x00000020
#define VGA_USER 0x00000050
int open_physical (int);
void * map_physical (int, unsigned int, unsigned int);
void close_physical (int);
int unmap_physical (void *, unsigned int);

int main (void){
    volatile int* LEDR_ptr;
    volatile int* SW_ptr;
    volatile int* HEX5_3_ptr;
    volatile int* HEX2_0_ptr;
    volatile int* KEY_ptr;
    volatile int* VGA_USER_ptr;
    char sendBuff[1024]; 
    int fd = -1; // used to open /dev/mem
    void *LW_virtual; // physical addresses for light-weight bridge
    // Create virtual memory access to the FPGA light-weight bridge
    if ((fd = open_physical (fd)) == -1)
    return (-1);
    // printf("stop at open_physical\n");
    if ((LW_virtual = map_physical (fd, 0xFF200000,  0x00005000)) == NULL)
    return (-1);
    // printf("stop at map physical\n");
    // Set virtual address pointer to I/O port
    /*int i = 0;    
    while(i<=64){
        printf("addr %d value is %d\n",i,* ((unsigned int *) (LW_virtual + i)) );
        i++;
    };
    */
    LEDR_ptr = (unsigned int *) (LW_virtual + LED);
    SW_ptr = (unsigned int *) (LW_virtual + SW);
    HEX5_3_ptr = (unsigned int *) (LW_virtual + HEX5_3);
    KEY_ptr = (unsigned int *) (LW_virtual + KEY);
    HEX2_0_ptr = (unsigned int *) (LW_virtual + HEX2_0);
    VGA_USER_ptr = (unsigned int *) (LW_virtual + VGA_USER);
    //printf("led is %d, sw is %d, HEX5_3 is %d\n", *LEDR_ptr, *SW_ptr, *HEX5_3_ptr);
/*    char HEX5_3_string[20];
    char HEX2_0_string[20];
    char SW_string[20];
    char KEY_string[20];
    char LEDR_string[20];*/
  int listenfd = 0,connfd = 0;
  
  struct sockaddr_in serv_addr;

  int numrv;  
 
  listenfd = socket(AF_INET, SOCK_STREAM, 0);
  printf("socket retrieve success\n");
  
  memset(&serv_addr, '0', sizeof(serv_addr));
  memset(sendBuff, '0', sizeof(sendBuff));
      
  serv_addr.sin_family = AF_INET;    
  serv_addr.sin_addr.s_addr = inet_addr("10.0.0.2");
  serv_addr.sin_port = htons(5000);    
 
  bind(listenfd, (struct sockaddr*)&serv_addr,sizeof(serv_addr));
  
  if(listen(listenfd, 10) == -1){
      printf("Failed to listen\n");
      return -1;
  }     

  printf("Waiting for connection...\n");  
  connfd = accept(listenfd, (struct sockaddr*)NULL ,NULL); // accept awaiting request
  printf("Connected !\n");
  //*KEY_ptr = 0;
  while(1)
    { 
      // *KEY_ptr = *KEY_ptr + 1;
      // *SW_ptr = 8;        
      //*HEX5_3_ptr = 128*128 * (*SW_ptr);
      //*LEDR_ptr = *SW_ptr;    
      snprintf(sendBuff,sizeof(sendBuff),"%c%d%c%d%c%d%c%d%c%d",'S',*HEX5_3_ptr,',',
            *HEX2_0_ptr,',',*LEDR_ptr,',',*SW_ptr,',',*KEY_ptr, 'T', *VGA_USER_ptr);
      write(connfd, sendBuff, strlen(sendBuff));
      memset(sendBuff, '0', sizeof(sendBuff));
      //printf("hex5_3 is %d and KEY is %d\n", *HEX5_3_ptr, *KEY_ptr);
      //sleep(1);
    }
    printf("connection closed\n"); 
    close(connfd);     
    sleep(1);
    unmap_physical (LW_virtual, 0x00005000);
    close_physical (fd);
  return 0;
}

/* Open /dev/mem to give access to physical addresses */
int open_physical (int fd)
{
    if (fd == -1) // check if already open
    {
        if ((fd = open( "/dev/mem", (O_RDWR | O_SYNC))) == -1)
            {
            printf ("ERROR: could not open \"/dev/mem\"...\n");
            return (-1);
            }
    }
    return fd;
}

/* Close /dev/mem to give access to physical addresses */
void close_physical (int fd)
{
    close (fd);
}

/*
* Establish a virtual address mapping for the physical addresses starting
* at base, and extending by span bytes */
void* map_physical(int fd, unsigned int base, unsigned int span)
{
    void *virtual_base;
    //printf("before mmap\n");
    // Get a mapping from physical addresses to virtual addresses
    virtual_base = mmap (NULL, span, (PROT_READ | PROT_WRITE), MAP_SHARED, fd, base);
    //printf("stop at mmap\n");
    if (virtual_base == MAP_FAILED)
    {
    printf ("ERROR: mmap() failed...\n");
    close (fd);
    return (NULL);
    }
    return virtual_base;
}


/* Close the previously-opened virtual address mapping */
int unmap_physical(void * virtual_base, unsigned int span)
{
    if (munmap (virtual_base, span) != 0)
    {
    printf ("ERROR: munmap() failed...\n");
    return (-1);
    }
    return 0;
}
