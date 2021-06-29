from ftplib import FTP

ftp = FTP('192.168.1.14')
ftp.login(user='lucas.chardin@hotmail.fr', passwd = 'LAROUSSE')

ftp.cwd('/hvhgkcytkhdyrj/')

print(ftp.retrlines('LIST')  )

def grabFile():

    filename = 'TEST.txt'

    localfile = open(filename, 'wb')
    ftp.retrbinary('RETR ' + filename, localfile.write, 1024)

    ftp.quit()
    localfile.close()


grabFile()