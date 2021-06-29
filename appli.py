from ftplib import FTP_TLS
ftps = FTP_TLS('89.156.226.85')
ftps.login('Lacanaux', 'Le92!jhGI')           # login anonymously before securing control channel
ftps.prot_p()          # switch to secure data connection.. IMPORTANT! Otherwise, only the user and password is encrypted and not all the file data.
ftps.retrlines('LIST')

filename = 'test.txt'
myfile = open(filename, 'wb')

ftps.retrbinary('RETR %s' % filename, myfile.write)

ftps.close()