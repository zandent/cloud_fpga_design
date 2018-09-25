#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <sys/types.h>
#include <netdb.h>
#include <time.h>
int main(void)
{
  int listenfd = 0,connfd = 0;
  
  struct sockaddr_in serv_addr;
 
  char sendBuff[1025];  
  int numrv;  
 
  listenfd = socket(AF_INET, SOCK_STREAM, 0);
  printf("socket retrieve success\n");
  
  memset(&serv_addr, '0', sizeof(serv_addr));
  memset(sendBuff, '0', sizeof(sendBuff));
      
  serv_addr.sin_family = AF_INET;    
  serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
  serv_addr.sin_port = htons(5000);    
 
  bind(listenfd, (struct sockaddr*)&serv_addr,sizeof(serv_addr));
  
  if(listen(listenfd, 10) == -1){
      printf("Failed to listen\n");
      return -1;
  }     

  printf("Waiting for connection...\n");  
  connfd = accept(listenfd, (struct sockaddr*)NULL ,NULL); // accept awaiting request
  clock_t begin = clock();
  clock_t end = clock();
  double time_spent = ((double) (end-begin)) /100;
  while(time_spent<=5)
    {    

      //strcpy(sendBuff, "Message from server");
      printf("Please enter message: ");
      scanf("%s", sendBuff);
      write(connfd, sendBuff, strlen(sendBuff));
      end = clock();
      time_spent = ((double) (end-begin) )/100;
      printf("%f sec\n",time_spent);
    }
    printf("connection over 5 sec, closed\n"); 
    close(connfd);     
    sleep(1);
  return 0;
}