### ✅ Basic Usage

Since the DropDown is a controlled component, a state is needed to control its showing behaviour.

```
import { Button, DropDown, Icon } from 'beautiful-react-ui'; 

const DropDownButton = () => {
  const [isShown, setIsShown] = React.useState(false); 
  const Trigger = (<Button icon="bars" rounded color="primary">Click me</Button>)
  
  const toggleHandler = React.useCallback(() => {
    setIsShown(!isShown);
  }); 
  
  return (
    <DropDown trigger={Trigger} isShown={isShown} onToggle={toggleHandler}>
      <DropDown.Button icon="home">Home</DropDown.Button>
      <DropDown.Button icon="calendar">Events</DropDown.Button>
      <DropDown.Button icon="bell">Notifications</DropDown.Button>
      <DropDown.Link icon="user" href="http://www.beautifulinteractions.com">User</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Link href="#">
        Logout
        <Icon name="power-off" />
      </DropDown.Link>
    </DropDown>
  );
};


<DropDownButton />
```

### Placement

The `placement` prop defines the placement of the dropdown over the given `trigger`.

Could be `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-center`, `right-center`.

```
import { Button, DropDown, Icon } from 'beautiful-react-ui'; 

const DropDownButton = () => {
  const [isShown, setIsShown] = React.useState(false); 
  const Trigger = (<Button icon="bars" rounded color="primary">Click me</Button>)
  
  const toggleHandler = React.useCallback(() => {
    setIsShown(!isShown);
  }); 
  
  return (
    <DropDown trigger={Trigger} isShown={isShown} onToggle={toggleHandler} placement="bottom-right">
      <DropDown.Button icon="home">Home</DropDown.Button>
      <DropDown.Button icon="calendar">Events</DropDown.Button>
      <DropDown.Button icon="bell">Notifications</DropDown.Button>
      <DropDown.Link icon="user" href="http://www.beautifulinteractions.com">User</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Link href="#">
        Logout
        <Icon name="power-off" />
      </DropDown.Link>
    </DropDown>
  );
};


<DropDownButton />
``` 

### Pointing Arrow

The `pointingArrow` defines whether or not the dropdown should show a pointing arrow, by default is set to true

```
import { Button, DropDown, Icon } from 'beautiful-react-ui'; 

const DropDownButton = () => {
  const [isShown, setIsShown] = React.useState(false); 
  const Trigger = (<Button icon="bars" rounded color="primary">Click me</Button>)
  
  const toggleHandler = React.useCallback(() => {
    setIsShown(!isShown);
  }); 
  
  return (
    <DropDown trigger={Trigger} isShown={isShown} onToggle={toggleHandler} pointingArrow={false}>
      <DropDown.Button icon="home">Home</DropDown.Button>
      <DropDown.Button icon="calendar">Events</DropDown.Button>
      <DropDown.Button icon="bell">Notifications</DropDown.Button>
      <DropDown.Link icon="user" href="http://www.beautifulinteractions.com">User</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Link href="#">
        Logout
        <Icon name="power-off" />
      </DropDown.Link>
    </DropDown>
  );
};


<DropDownButton />
```
