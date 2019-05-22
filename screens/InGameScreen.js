import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Dialog, { 
  SlideAnimation, 
  DialogContent,
  DialogTitle, 
  DialogFooter, DialogButton,
} from 'react-native-popup-dialog';

import styles from '../assets/styles/mainStyle';

export default class InGameScreen extends React.Component {
  static navigationOptions = {
    title: null,
    header: () => {

    }
  };
  np = 0;

  aspX = styles.Constants.aspX;
  aspY = styles.Constants.aspY;
  
  constructor(props) {
    super(props);
    
    this.state = {
        timer: 20, 
        nplayers: 0,
        visibleDice:false,
        visibleWinner: false,
        timerVisible: false,
        pontos: [0,0,0,0,0,0,0],
        uridavez: 0,
        uriImage: [
          require('../assets/images/dado1.png'),
          require('../assets/images/dado2.png'),
          require('../assets/images/dado3.png'),
          require('../assets/images/dado4.png'),
          require('../assets/images/dado5.png'),
          require('../assets/images/dado6.png'),
        ],
        jogadores: this.props.navigation.getParam('jogadores', []),
        maxPontosIndex: 0,
        dudeMax: {},
        visibleEncerrar: false,
    };
    
  }

  componentDidUpdate(){
    if(this.state.timer === 0){ 
      clearInterval(this.interval);
      this.setState({timer:20});
    }
  }

  render() {

    let adiciona_jogadores = this.state.jogadores.map( (jogador, index) => {
      return (
          <View key={jogador.chave} pass_in_jogador={jogador}>
            
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderBottomWidth: 1, borderBottomColor: styles.color.cinzaClaro,
            }}> 
              <ScrollView horizontal={true} style={{width: 140 * this.aspX}}>
                <Text style={[styles.text.subtitle, {color: styles.color.cinza, marginLeft:0, padding: 10 * this.aspX, fontSize: 19}]}>
                  {jogador.content}
                </Text>
              </ScrollView>

                <TouchableOpacity
                  onPress={() => this.menosUm(jogador.chave)}
                  style={{alignItems: 'center', justifyContent: 'center',}}
                  >
                  <Text style={[styles.button.RoundButtonRed]}> -1 </Text>
                </TouchableOpacity>
                
                <Text style={styles.text.destaque}> 
                  {jogador.pontos}
                </Text>
                
                <TouchableOpacity
                  onPress={() => {this.maisUm(jogador.chave); }}
                  >
                  <Text style={[styles.button.RoundButtonDark]}>
                      +1
                  </Text>
                </TouchableOpacity>
            </View>
          </View>
      )
    });

  return (
    <View>
        {/** toolbar */}
        <View style={{flexDirection: 'row', alignItems:'baseline'}}>
          {/** btn MENU */}
          <View style={{
            justifyContent:'flex-start',
            backgroundColor: styles.color.verdeMusgo, 
            marginTop: 19 * this.aspY, 
            padding: 10 * this.aspX, 
            paddingTop: 14 * this.aspY,  
            flexDirection: 'row', 
            flex:1,
            resizeMode: "stratch"
          }}>            
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }} 
              >
              <Image source={require('../assets/images/menu.png')}
                style={styles.image.iconToolbar}
                />
            </TouchableOpacity>
          </View>
          {/** btn TIMER */}
          <View style={{
            justifyContent:'flex-end', 
            backgroundColor: styles.color.verdeMusgo, 
            marginTop: 19 * this.aspY, 
            padding: 10 * this.aspX, 
            paddingTop: 14 * this.aspY, 
            marginRight: 0,
            paddingRight: 5 * this.aspX,
            resizeMode: "contain",
            flexDirection: 'row', 
          }}>            
            <TouchableOpacity
              onPress={() => {
                this.setState({timerVisible: true});
              }} 
              >
              <Image source={require('../assets/images/timerwhite.png')}
                style={styles.image.iconToolbar}
                />
            </TouchableOpacity>
          </View>
          {/** btn DADO */}
          <View style={{
            justifyContent:'flex-end', 
            backgroundColor: styles.color.verdeMusgo, 
            marginTop: 19 * this.aspY, 
            padding: 10 * this.aspX, 
            paddingTop: 14 * this.aspY, 
            marginLeft: 0,
            paddingLeft: 5 * this.aspX,
            
            flexDirection: 'row', 
          }}>            
            <TouchableOpacity
              onPress={() => {
                this.setState({visibleDice: true});
            }} 
              >
              <Image source={require('../assets/images/dicew2.png')}
                style={styles.image.iconToolbar}
                />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/** BODY */}
          <View style={styles.container.contentContainerLeft}>
            <Text style={styles.text.title}>
              JOGADORES
            </Text>
          </View>
          
          <ScrollView 
            contentContainerStyle={{alignItems: 'center', }}
            style={{height:styles.heightScreen * 0.55}}
          >
            { adiciona_jogadores }
          </ScrollView>

          
          <View style={{padding: 10, backgroundColor: 'white', marginBottom: 10}}>
            <TouchableOpacity 
              onPress={() => this.setState({visibleWinner:true})}
              
              style={[styles.container.centerContainer, {padding:10, margin:0}]}>
              <Text style={styles.button.mainButtonRed}>
                ENCERRAR PARTIDA
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.container.centerContainer,{padding:0, margin:0}]}>
          {/** pop up do dado */}
          <Dialog
            visible={this.state.visibleDice}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            dialogTitle={<DialogTitle title="Dado" />}
            footer={
              <DialogFooter>
                <DialogButton
                  text="Fechar"
                  onPress={() => {
                    this.setState({visibleDice:false});
                  }}
                />
                <DialogButton
                  text="JOGAR"
                  onPress={() => {
                    var max = 6;
                    var min = 0;
                    let indexImg = Math.floor(Math.random() * (max - min)) + min;
                    
                    this.setState({uridavez: indexImg});
                  }}
                />
              </DialogFooter>
            }
          >
            <DialogContent>
              <View style={[styles.container.centerContainer,  {width: styles.widthScreen * 0.7, height: styles.heightScreen * 0.15} ]}>
                <Image 
                style={{width: 130 * this.aspX, height: 100 * this.aspY, resizeMode: "contain"}}
                source={this.state.uriImage[this.state.uridavez]} />
              </View>
            </DialogContent>
          </Dialog>

          {/** POP UP DO TIMER */}

          <Dialog
            visible={this.state.timerVisible}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            dialogTitle={<DialogTitle title="Timer" />}
            footer={
              <DialogFooter>
                <DialogButton
                  text="Fechar"
                  onPress={() => {
                    clearInterval(this.interval);
                    this.setState({timerVisible:false, timer: 20});
                  }}
                />
                
                <DialogButton
                  text="Iniciar" 
                  onPress={() => {
                    
                    if(this.state.timer===20){
                      this.setState({timer:19});
                      this.interval = setInterval(
                        () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })), 
                        1000
                      );
                    }
                  }}
                />
              </DialogFooter>
            }
          >
            <DialogContent>
              <View style={[styles.container.centerContainer,  {
                  width: styles.widthScreen * 0.7, height: styles.heightScreen * 0.15,
                } ]}>
                <Text style={{fontSize: 60}}>{this.state.timer} s</Text>
              </View>
            </DialogContent>
          </Dialog>

        </View>
        
        <View style={[styles.container.centerContainer,]}>
          {/** pop up do encerrar */}
          <Dialog
            visible={this.state.visibleEncerrar}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            dialogTitle={<DialogTitle title="Fim de Partida!" />}
            footer={
              <DialogFooter>
                <DialogButton
                  text="Cancelar"
                  onPress={() => {
                    this.setState({visibleEncerrar:false});
                  }}
                />
                <DialogButton
                  text="OK"
                  onPress={() => {
                    this.setState({visibleEncerrar:false});
                    this.props.navigation.popToTop();
                  }}
                />
              </DialogFooter>
            }
          >
            <DialogContent>
              <View style={[styles.container.centerContainer,  {width: styles.widthScreen * 0.7, height: styles.heightScreen * 0.15} ]}>
                
                <Text style={[styles.text.subtitle,{textAlign: 'center',justifyContent:'center', margin: 0, padding: 10 * this.aspX}]}>
                  Deseja Encerrar a partida?
                </Text>
              </View>
            </DialogContent>
          </Dialog>

        </View>

        <View style={[styles.container.centerContainer,]}>
          {/** pop up do winner */}
          <Dialog
            visible={this.state.visibleWinner}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            dialogTitle={<DialogTitle title="Fim de Partida!" />}
            footer={
              <DialogFooter>
                <DialogButton
                  text="Cancelar"
                  onPress={() => {
                    this.setState({visibleWinner:false});
                  }}
                />
                <DialogButton
                  text="OK"
                  onPress={() => {
                    this.setState({visibleWinner:false});
                    this.setState({visibleEncerrar:true});
                  }}
                />
              </DialogFooter>
            }
          >
            <DialogContent>
              <View style={[styles.container.centerContainer,  {width: styles.widthScreen * 0.7, height: styles.heightScreen * 0.3} ]}>
                <View>
                  <Image 
                  style={{width: 100 * this.aspX, height: 100 * this.aspY, resizeMode: "contain"}}
                  source={require('../assets/images/trofeu.png')} />
                </View>

                <ScrollView style={{minHeight: 80 * this.aspY}}>
                  <Text style={[styles.text.subtitle,{textAlign: 'center',justifyContent:'center', margin: 0, padding: 0 * this.aspX}]}>
                    {this._vencedor()}
                  </Text>
                </ScrollView>
              </View>
            </DialogContent>
          </Dialog>

        </View>
      </View>
    );  
  }

  toInteger= (s) => {
    return parseInt(s).toString() === 'NaN'? 0 : parseInt(s);
  };

  maisUm = (k) => {
    jogs = this.state.jogadores;

    for (j = 0; j < jogs.length; j++){
      
      if (jogs[j].chave === k){
        jogs[j].pontos = jogs[j].pontos + 1;
      }
    }

    this.setState({
      jogadores : jogs,
    });
  }
  menosUm = (k) => {
    jogs = this.state.jogadores;

    for (j = 0; j < jogs.length; j++){
      
      if (jogs[j].chave === k && jogs[j].pontos > 0){
        jogs[j].pontos = jogs[j].pontos - 1;
      }
    }

    this.setState({
      jogadores : jogs,
    });
  }

  _vencedor = () =>{
    mp = this._max(this._makeArrayPoints());
    jogs = this.state.jogadores;
    winner = 0;
    nwinners = 0;
    
    for(j = 0; j < jogs.length; j++){
      if(jogs[j].pontos === mp){
        winner = j;
        nwinners = nwinners + 1;
      }
    }
    if(nwinners > 1){
      return "EMPATE!";
    }
    
    return jogs[winner].content.concat(" foi o vencedor! Parabéns!");
  }

  _makeArrayPoints = () => {
    jogs = this.state.jogadores;
    v = [];
    for(j = 0; j < jogs.length; j++){
      v.push(jogs[j].pontos);
    }
    return v;
  }

  _max = (v) => {
    max = 0;
    for(i = 0; i < v.length ; i++){
      if(v[max] < v[i]){
        max = i
      }
    }
    return v[max];
  }

}
