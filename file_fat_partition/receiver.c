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
 
int main(void)
{
  int sockfd = 0,n = 0;
  char recvBuff[1024];
  struct sockaddr_in serv_addr;
 
  memset(recvBuff, '0' ,sizeof(recvBuff));
  if((sockfd = socket(AF_INET, SOCK_STREAM, 0))< 0)
    {
      printf("\n Error : Could not create socket \n");
      return 1;
    }
 
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_port = htons(5000);
  serv_addr.sin_addr.s_addr = inet_addr("10.0.0.2");
 int cntfd = connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
  if(cntfd<0)
    {
      printf("\n Error : Connect Failed \n");
      return 1;
    }
 
  int i = 1000;
  FILE *file;
  //while((n = read(sockfd, recvBuff, sizeof(recvBuff)-1)) > 0)
   do {
      i--;
      if(i==999){
        file = fopen("temp.txt","w");
      }else
        file = fopen("temp.txt","a");
      if(i==995)
        i=1000;
      n = read(sockfd, recvBuff, sizeof(recvBuff)-1);
      //strcpy(recvBuff,"welcome");
      //printf("%s",recvBuff);
      if(n>0){
        recvBuff[n] = 0;
        if(fputs(recvBuff, file) == EOF)
        {
        printf("\n Error : Fputs error");
        }
      }
      else
        printf("\n Read Error \n");
      fclose(file);
      memset(recvBuff, 0, sizeof(recvBuff));
    } while(1);

    printf("Connection closed\n");

  return 0;
}