from ftplib import FTP_TLS
ftps = FTP_TLS('89.156.226.85')
ftps.login('Lacanaux', 'Le92!jhGI')
ftps.prot_p() 
ftps.retrlines('LIST')

filename = 'test.txt'
myfile = open(filename, 'wb')

ftps.retrbinary('RETR %s' % filename, myfile.write)

ftps.close()