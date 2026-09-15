import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [tela, setTela] = useState('login');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // =========================
  // SPLASH SCREEN
  // =========================

  if (mostrarSplash) {
    return (
      <View style={styles.splash}>

        <Image
          source={require('./assets/logo_lumora.png')}
          style={styles.logoSplash}
        />

        <Text style={styles.nomeSplash}>
          Lumora
        </Text>

        <View style={styles.linhaSplash} />

        <Text style={styles.descricaoSplash}>
          Controle de estoque de{'\n'}
          produtos de limpeza
        </Text>

        <StatusBar style="light" />

      </View>
    );
  }

  // =========================
  // TELA DE LOGIN
  // =========================

  if (tela === 'login') {
    return (
      <View style={styles.container}>

        {/* HEADER */}

        <View style={styles.header}>

          <View style={styles.logoArea}>

            <Image
              source={require('./assets/logo_lumora.png')}
              style={styles.logoHeader}
            />

            <Text style={styles.nomeHeader}>
              LUMORA
            </Text>

          </View>

          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={38}
              color="#FFFFFF"
            />
          </TouchableOpacity>

        </View>


        {/* CONTEÚDO LOGIN */}

        <View style={styles.conteudo}>

          <MaterialCommunityIcons
            name="spray-bottle"
            size={48}
            color="#A3224D"
            style={styles.iconeLogin}
          />

          <Text style={styles.titulo}>
            LOGIN
          </Text>


          {/* EMAIL */}

          <View style={styles.inputContainer}>

            <View style={styles.iconeCampo}>
              <Ionicons
                name="person"
                size={20}
                color="#777777"
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#858085"
              keyboardType="email-address"
              autoCapitalize="none"
            />

          </View>


          {/* SENHA */}

          <View style={styles.inputContainer}>

            <View style={styles.iconeCampo}>
              <Ionicons
                name="lock-closed"
                size={19}
                color="#777777"
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#858085"
              secureTextEntry={true}
            />

          </View>


          {/* BOTÃO LOGAR */}
<TouchableOpacity
  style={styles.botao}
  onPress={() => setTela('cadastro')}
>
  <Text style={styles.textoBotao}>
    Logar
  </Text>
</TouchableOpacity>


          {/* CADASTRO */}

          <View style={styles.cadastroArea}>

            <Text style={styles.textoCadastro}>
              Não tem conta?
            </Text>

            <TouchableOpacity
              onPress={() => setTela('cadastro')}
            >
              <Text style={styles.linkCadastro}>
                Cadastre aqui!
              </Text>
            </TouchableOpacity>

          </View>

        </View>


        {/* CUBO */}

        <View style={styles.detalheInferior}>
          <MaterialCommunityIcons
            name="cube-outline"
            size={25}
            color="#FFFFFF"
          />
        </View>

        <StatusBar style="light" />

      </View>
    );
  }


  // =========================
  // TELA DE CADASTRO
  // =========================

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <View style={styles.logoArea}>

          <Image
            source={require('./assets/logo_lumora.png')}
            style={styles.logoHeader}
          />

          <Text style={styles.nomeHeader}>
            LUMORA
          </Text>

        </View>

        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={38}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>


      {/* CONTEÚDO CADASTRO */}

      <View style={styles.conteudoCadastro}>

        {/* ÍCONE */}

        <MaterialCommunityIcons
          name="spray-bottle"
          size={48}
          color="#A3224D"
          style={styles.iconeCadastro}
        />

        {/* TÍTULO */}

        <Text style={styles.tituloCadastro}>
          CADASTRO
        </Text>


        {/* NOME */}

        <View style={styles.inputCadastro}>

          <View style={styles.iconeCampo}>
            <Ionicons
              name="person"
              size={20}
              color="#777777"
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#858085"
          />

        </View>


        {/* EMAIL */}

        <View style={styles.inputCadastro}>

          <View style={styles.iconeCampo}>
            <Ionicons
              name="mail-outline"
              size={21}
              color="#777777"
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#858085"
            keyboardType="email-address"
            autoCapitalize="none"
          />

        </View>


        {/* SENHA */}

        <View style={styles.inputCadastro}>

          <View style={styles.iconeCampo}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#777777"
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#858085"
            secureTextEntry={true}
          />

        </View>


        {/* BOTÃO CADASTRAR */}

        <TouchableOpacity style={styles.botaoCadastro}>

          <Text style={styles.textoBotao}>
            Cadastrar
          </Text>

        </TouchableOpacity>


        {/* VOLTAR PARA LOGIN */}

        <TouchableOpacity
          onPress={() => setTela('login')}
        >

          <Text style={styles.linkLogin}>
            Logue aqui!
          </Text>

        </TouchableOpacity>

      </View>


      <StatusBar style="light" />

    </View>
  );
}


/* ===================================
   ESTILOS
=================================== */

const styles = StyleSheet.create({

  /* =========================
     SPLASH
  ========================= */

  splash: {
    flex: 1,
    backgroundColor: '#9B2348',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoSplash: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    marginBottom: 5,
  },

  nomeSplash: {
    fontSize: 44,
    color: '#FFF8ED',
    fontFamily: 'serif',
    fontWeight: '600',
    letterSpacing: 2,
    marginBottom: 15,
  },

  linhaSplash: {
    width: 70,
    height: 1,
    backgroundColor: '#E8CFC5',
    marginBottom: 18,
  },

  descricaoSplash: {
    fontSize: 14,
    color: '#F8E9E2',
    fontFamily: 'serif',
    textAlign: 'center',
    lineHeight: 21,
  },


  /* =========================
     CONTAINER
  ========================= */

  container: {
    flex: 1,
    backgroundColor: '#F7E8FA',
  },


  /* =========================
     HEADER
  ========================= */

  header: {
    height: 88,
    backgroundColor: '#9B2348',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    elevation: 4,
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoHeader: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 8,
  },

  nomeHeader: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },


  /* =========================
     LOGIN
  ========================= */

  conteudo: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 105,
  },

  iconeLogin: {
    marginBottom: 2,
  },

  titulo: {
    fontSize: 43,
    fontWeight: '900',
    color: '#A3224D',
    marginBottom: 24,
    letterSpacing: -1,
  },


  /* =========================
     CAMPOS LOGIN
  ========================= */

  inputContainer: {
    width: '82%',
    height: 40,
    backgroundColor: '#D6CBD6',
    borderWidth: 1,
    borderColor: '#888088',
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },

  iconeCampo: {
    width: 35,
    height: 35,
    marginLeft: 3,
    borderRadius: 18,
    backgroundColor: '#A9A1A9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: '#555555',
    paddingHorizontal: 9,
  },


  /* =========================
     BOTÃO LOGIN
  ========================= */

  botao: {
    width: '70%',
    height: 34,
    backgroundColor: '#A3224D',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    borderWidth: 2,
    borderColor: '#DCAEC0',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },


  /* =========================
     TEXTO CADASTRO
  ========================= */

  cadastroArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  textoCadastro: {
    fontSize: 16,
    color: '#858085',
  },

  linkCadastro: {
    fontSize: 16,
    color: '#7435E8',
    marginLeft: 4,
  },


  /* =========================
     CUBO
  ========================= */

  detalheInferior: {
    position: 'absolute',
    left: 32,
    bottom: 65,
  },


  /* =========================
     CADASTRO
  ========================= */

  conteudoCadastro: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 105,
  },

  iconeCadastro: {
    marginBottom: 3,
  },

  tituloCadastro: {
    fontSize: 43,
    fontWeight: '900',
    color: '#A3224D',
    marginBottom: 23,
    letterSpacing: -1,
  },

  inputCadastro: {
    width: '82%',
    height: 40,
    backgroundColor: '#D6CBD6',
    borderWidth: 1,
    borderColor: '#888088',
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  botaoCadastro: {
    width: '70%',
    height: 34,
    backgroundColor: '#A3224D',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    borderWidth: 2,
    borderColor: '#DCAEC0',
  },

  linkLogin: {
    fontSize: 14,
    color: '#7435E8',
    marginTop: 4,
  },

});