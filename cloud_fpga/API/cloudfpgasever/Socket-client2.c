#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <arpa/inet.h>
#include <fcntl.h>
#include <sys/mman.h>
#define SW 0x00000010
#define LED 0x00000000
#define HEX2_0 0x00000030
#define HEX5_3 0x00000040
#define KEY 0x00000020
int open_physical (int);
void * map_physical (int, unsigned int, unsigned int);
void close_physical (int);
int unmap_physical (void *, unsigned int);

int main(void)
{
  volatile int* SW_ptr;

  int sockfd = 0,n = 0;
  char recvBuff[1024];
  struct sockaddr_in serv_addr;

  int fd = -1; // used to open /dev/mem
  void *LW_virtual; // physical addresses for light-weight bridge

  if ((fd = open_physical (fd)) == -1)
  return (-1);

  if ((LW_virtual = map_physical (fd, 0xFF200000,  0x00005000)) == NULL)
  return (-1);

  SW_ptr = (unsigned int *) (LW_virtual + SW);


  memset(recvBuff, '0' ,sizeof(recvBuff));
  if((sockfd = socket(AF_INET, SOCK_STREAM, 0))< 0)
    {
      printf("\n Error : Could not create socket \n");
      return 1;
    }
 
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_port = htons(5000);
  serv_addr.sin_addr.s_addr = inet_addr("10.0.0.3");
 
  if(connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr))<0)
    {
      printf("\n Error : Connect Failed \n");
      return 1;
    }
 
  while((n = read(sockfd, recvBuff, sizeof(recvBuff)-1)) > 0)
    {
      recvBuff[n] = 0;
      if(fputs(recvBuff, stdout) == EOF)
    {
      printf("\n Error : Fputs error");
    } else {
      int sw = 0;
      int len = strlen(recvBuff);
      int i;
      for(i=0;i<len;i++){
        sw = sw*10+(recvBuff[i]-'0'); 
      }
      *SW_ptr = sw;
    }
      printf("\n");
    }
 
  if( n < 0)
    {
      printf("\n Read Error \n");
    }
 
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
