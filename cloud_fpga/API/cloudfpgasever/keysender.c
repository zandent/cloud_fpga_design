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
  serv_addr.sin_addr.s_addr = inet_addr("10.0.0.3");
  serv_addr.sin_port = htons(5000);    
 
  bind(listenfd, (struct sockaddr*)&serv_addr,sizeof(serv_addr));
  
  if(listen(listenfd, 10) == -1){
      printf("Failed to listen\n");
      return -1;
  }     
  connfd = accept(listenfd, (struct sockaddr*)NULL ,NULL); // accept awaiting request
  while(1)
    {      
      FILE *myFile;
      myFile = fopen("sw.txt", "r");
      
      if(myFile==NULL){
        //do nothing
      } else {
        //read file into array
        sleep(2);
        FILE *myFile2;
        myFile2 = fopen("sw.txt", "r");
        int numberArray[4];
        int i;
        for (i = 0; i < 4; i++)
        {
          fscanf(myFile, "%1d", &numberArray[i]);
        }
        for (i = 0; i < 4; i++)
        {
          printf("Number is: %d\n\n", numberArray[i]);
          sendBuff[i] = '0' + numberArray[i];
        }
        sendBuff[4] = '\0';
        remove("sw.txt");
        write(connfd, sendBuff, strlen(sendBuff));
      }
    } 
 
  return 0;
}