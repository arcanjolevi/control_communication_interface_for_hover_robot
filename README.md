# Control Communication Interface for Hover Robot

<h1 align="center">
    <img alt="CCL" title="logo" src="https://github.com/arcanjolevi/control_communication_interface_for_hover_robot/blob/master/schemas/CCL.png" width="400px" />
</h1>


<h4 align="center">
  🚀 Description
</h4>

<h5 align="center">
  This project is an implementation of a communication layer for AgroBot or CoronaKiller robot projects.
 
</h5>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/arcanjolevi/control_communication_interface_for_hover_robot">

  <a href="https://github.com/arcanjolevi/control_communication_interface_for_hover_robot/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arcanjolevi/control_communication_interface_for_hover_robot">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arcanjolevi/control_communication_interface_for_hover_robot">
  
  <a href="https://github.com/arcanjolevi/control_communication_interface_for_hover_robot/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/arcanjolevi/control_communication_interface_for_hover_robot">
  </a>
</p>

#### ❯ AgroBot/CoronaKiller official repository:
https://github.com/CaioslppUO/Agrobot-2.0



## Use instructions

### ❯ How to use the mobile app

* Download the app here: https://github.com/arcanjolevi/robot_control_interface/releases/download/coronaKiller/mobileAppControl.apk
* Configure the communication data: server ip and port.
* When the server is running at the same network that the mobile device is connectd and the commnunication data is set correctly in the device, both will connect automatically.

### ❯ How run the server

* Clone this ropository
```
https://github.com/arcanjolevi/robot_control_interface.git && cd robot_control_interface
```
* Change directory to server folder and run npm to install modules
```
cd server && npm install
```
* Run the server
```
npm start
```

### ❯ How access data in the robot 

#### Get control data

* With Python
```
import requests

data = requests.get('http://SERVER_ADRESS:PORT/control')

```

* With node
```
const axios = require('axios');

const data = axios.get('http://SERVER_ADRESS:PORT/control')

```

##### Return
```
{
  limit: number;
  lightOn: boolean;
  autoMode: boolean;
  powerA: boolean;
  steer: number;
  speed: number;
}

```

#### Get auto mode params

* With Python
```
import requests

data = requests.get('http://SERVER_ADRESS:PORT/auto_mode_params')

```

* With node
```
const axios = require('axios');

const data = axios.get('http://SERVER_ADRESS:PORT/auto_mode_params')

```

##### Return
```
{
  limit: number;
  steer: number;
  speed: number;
  correctionsMovements: number;
  correctionFactor: number;
  detectDistance: number;
  moveTime: number;
  stopTime: number;
}

```


### ❯ How to send data to the app

* With Python
```
import requests

data = requests.post('http://SERVER_ADRESS:PORT/send_to_app', {"key":"value"})

```

* With node
```
const axios = require('axios');

const data = axios.post('http://SERVER_ADRESS:PORT/auto_mode_params', {key: value});

```
