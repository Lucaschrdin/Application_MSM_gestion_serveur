import ftplib
import ssl

class ImplicitFTP_TLS(ftplib.FTP_TLS):
    """FTP_TLS subclass that automatically wraps sockets in SSL to support implicit FTPS."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._sock = None

    @property
    def sock(self):
        """Return the socket."""
        return self._sock

    @sock.setter
    def sock(self, value):
        """When modifying the socket, ensure that it is ssl wrapped."""
        if value is not None and not isinstance(value, ssl.SSLSocket):
            value = self.context.wrap_socket(value)
        self._sock = value

ftp_client = ImplicitFTP_TLS()
ftp_client.connect(host='89.156.226.85', port=2121, timeout=90)
ftp_client.set_pasv(False)
ftp_client.login(user='Lacanaux', passwd='Le92!jhGI')
ftp_client.prot_p()

def grabFile():

    filename = 'test.txt'

    localfile = open(filename, 'wb')
    ftp_client.retrbinary('RETR ' + filename, localfile.write, 1024)
    ftp_client.quit()
    localfile.close()


grabFile()