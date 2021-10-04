#### Redis basic commands
add key value pair
```
SET <key> <value> 
```

remove key value pair
```
DEL <key>
```

check if key value pair exists
```
EXISTS <key>
```

set expiry time
```
EXPIRE <key> <time-in-seconds>
```

check life-time left 
```
TTL <key>
```


#### PUB-SUB of redis
publish a message
```
PUBLISH <chanel-name> <messege>
```

get (subscribe to) messages from a channel
```
SUBSCRIBE <channel-name>
```
