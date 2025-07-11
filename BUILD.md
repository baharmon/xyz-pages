# Building

## Local
Connect to VPN
```
cd /mnt/d/xyz-pages
hugo server
hugo
git add -A
git commit -n -am 'commit message'
git push
```

View locally
```
hugo server --baseURL http://127.0.0.1:1313/
```

## Server
Connect to VPN
Pull on server
```
ssh baharmon@xyz.cct.lsu.edu -p 2525
cd /home/xyz/www/xyz.cct.lsu.edu/public/xyz-pages
git pull
```
