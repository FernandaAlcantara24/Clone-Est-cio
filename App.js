import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 70,}} source={{uri: 'https://logodownload.org/wp-content/uploads/2014/12/estacio-logo.png',}}/>
      <Text style={{fontSize: 20, padding: 10}}>SIA - Sistema de Informações Acadêmicas</Text>
      <Text style={{fontSize: 15, paddingBottom: 30}}>Domingo, 10 de Março de 2024</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text_button}>Entrar com e-mail de estudante</Text>    
      </TouchableOpacity>
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 25}}>
      <View style={{flex: 1, height: 1, backgroundColor: '#CCD3CA'}} />
    <View>
      <Text style={{width: 50, textAlign: 'center'}}>OU</Text>
    </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#CCD3CA'}} />
  </View>
  <View>
    <Text style={{width: 100, textAlign: 'left', paddingLeft: 14,}}>Matrícula</Text>
      <TextInput style={styles.text_input} placeholder="Digite sua matrícula" keyboardType="numeric"/>
    <Text style={{textAlign: 'right', paddingRight: 15, fontSize: 12,color:'#0BBBEF'}}>Não sei ou esqueci a matrícula</Text>
    <Text style={{width: 100, textAlign: 'left', paddingLeft: 14,}}>Senha</Text>
      <TextInput style={styles.text_input} placeholder="Digite sua senha" keyboardType="numeric"/>
    <Text style={{textAlign: 'right', paddingRight: 15,paddingBottom:15 ,fontSize: 12,color:'#0BBBEF'}}>Esqueci minha senha / Cadastrar primeira senha</Text>
  </View>
  <Image style={{width: 300,padding: 50}} source={{uri: 'https://www.inboundcycle.com/hs-fs/hubfs/captcha%20-%20n%C3%A3o%20sou%20um%20robo.png?width=357&height=122&name=captcha%20-%20n%C3%A3o%20sou%20um%20robo.png',}}/>
  <TouchableOpacity style={{padding: 16, backgroundColor: '#c6c6c6', width: '85%', borderRadius: 8, marginTop: 30}}>
        <Text style={styles.text_button}>Entrar</Text>    
  </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  button: {
    padding: 16,
    backgroundColor: '#0072C6',
    width: '85%',
    borderRadius: 8,
  },
  text_button: {
    color: '#fff', 
    fontSize: 20, 
    fontWeight:'bold',
    textAlign: 'center',
  },
  text_input: {
    height: 50,
    margin: 12,
    width: 350,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCD3CA',
    padding: 15,
    fontWeight:'bold',
  },
});
