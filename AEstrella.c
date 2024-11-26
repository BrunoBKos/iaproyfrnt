#include <sys/socket.h>
#include <stdlib.h>


int main(){

    int sc;
    struct sockaddr addr;
    socklen_t ln;
    void* buff;
    char inicio[3];
    char final[3];
    int modo;
    int hora;
    buff = malloc(128);

    sc = socket(AF_INET, SOCK_STREAM, 80);
    if(sc == -1){
        perror("sc no inicializado");
    }
    bind(sc,&addr,ln);
    listen(sc,64);
    accept(sc,&addr,ln);
    while(1){
        recv(sc,buff,128,0);
        strcpy(inicio,(char*)buff);
        strcpy(final,(char*)buff + 3);
        modo = *((int*) buff+6);
        hora = *((int*) buff+12);
    }

    return 0;
}

