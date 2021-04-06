# React Native Props

## Sending Props :
<p>Using <b>name</b> as a <b>props</b> we can customize the component</p>

```js
<FunctionCom name='Function Component'/>
<ClassCom name='Class Component'/>
```
## Receiving Props In Functional Components :
<p>When we use props in our function component then pass <b>props</b> as a parameter and then use it </p>

```js
const FunctionCom = (props) =>{
    return(
        <View>
            <Text>This is {props.name} </Text>
        </View>
    );
} 
```
## Receiving Props In Class Components :
<p>When we use props in our class component then use <b>this</b> keyword</p>

```js
export default class ClassCom extends Component{
    render(){
        return(
            <View>
                <Text>This is {this.props.name}</Text>
            </View>
        );
    }
}
```
## Pass Multiple Props :
```js
<CustomCom name='Admin' work='Coding'/>
```
## Usage
```
$ git clone https://github.com/SuryaKarmakar/React-Native-Props.git
$ cd React-Native-Props
$ npm install 
$ npm run [web, android, ios]
```
## Run with Expo 
```
$ expo start --[web, android, ios]
```
