import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


export default function BemVindo({ onExplorar, onCadastrar }) {

  return (
    <SafeAreaView style={styles.container}>

      {/* ================= CABEÇALHO ================= */}

      <View style={styles.header}>

        <View style={styles.logoArea}>

          <Image
            source={require('./assets/logo_lumora.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.logoText}>
            LUMORA
          </Text>

        </View>


        {/* MENU */}

        <TouchableOpacity style={styles.menu}>

          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />

        </TouchableOpacity>

      </View>


      {/* ================= CONTEÚDO ================= */}

      <View style={styles.content}>

        {/* TÍTULO */}

        <Text style={styles.title}>
          BEM-VINDO À
          {'\n'}
          LUMORA
        </Text>


        {/* DESCRIÇÃO */}

        <Text style={styles.description}>
          Controle seu estoque de produtos
          {'\n'}
          de limpeza de forma simples,
          {'\n'}
          rápida e organizada.
        </Text>


        {/* IMAGEM */}

        <Image
          source={require('./assets/splash-icon.png')}
          style={styles.productImage}
          resizeMode="contain"
        />


        {/* ================= BOTÃO EXPLORAR ================= */}

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={onExplorar}
          activeOpacity={0.8}
        >

          <Text style={styles.exploreIcon}>
            ◇
          </Text>

          <Text style={styles.exploreText}>
            Explorar estoque
          </Text>

        </TouchableOpacity>


        {/* ================= BOTÃO CADASTRAR ================= */}

        <TouchableOpacity
          style={styles.registerButton}
          onPress={onCadastrar}
          activeOpacity={0.8}
        >

          <Text style={styles.plus}>
            +
          </Text>

          <Text style={styles.registerText}>
            Cadastrar produto
          </Text>

        </TouchableOpacity>

      </View>


      {/* ================= RODAPÉ ================= */}

      <View style={styles.footer} />

    </SafeAreaView>
  );
}



/* ===================================================== */
/* ======================= ESTILOS ===================== */
/* ===================================================== */

const styles = StyleSheet.create({

  /* FUNDO DA TELA */

  container: {
    flex: 1,
    backgroundColor: '#F8E7FA',
  },


  /* ================= CABEÇALHO ================= */

  header: {
    height: 70,

    backgroundColor: '#9B2348',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 18,

    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,

    elevation: 3,
  },


  /* ÁREA DA LOGO */

  logoArea: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  /* LOGO */

  logo: {
    width: 48,
    height: 48,
  },


  /* NOME LUMORA */

  logoText: {
    color: '#FFFFFF',

    fontSize: 17,

    fontWeight: '900',

    marginLeft: 8,

    letterSpacing: 0.5,
  },


  /* ================= MENU ================= */

  menu: {
    width: 42,
    height: 42,

    justifyContent: 'center',

    alignItems: 'center',
  },


  menuLine: {
    width: 25,
    height: 3,

    backgroundColor: '#FFFFFF',

    marginVertical: 2,

    borderRadius: 3,
  },


  /* ================= CONTEÚDO ================= */

  content: {
    flex: 1,

    alignItems: 'center',

    paddingHorizontal: 18,

    paddingTop: 68,
  },


  /* ================= TÍTULO ================= */

  title: {
    color: '#9B2348',

    fontSize: 32,

    fontWeight: '900',

    textAlign: 'center',

    lineHeight: 31,

    letterSpacing: -0.5,
  },


  /* ================= DESCRIÇÃO ================= */

  description: {
    color: '#9B2348',

    fontSize: 14,

    fontWeight: '500',

    textAlign: 'center',

    lineHeight: 17,

    marginTop: 19,
  },


  /* ================= ILUSTRAÇÃO ================= */

  productImage: {
    width: 145,

    height: 145,

    marginTop: 27,

    marginBottom: 35,
  },


  /* ================= BOTÃO EXPLORAR ================= */

  exploreButton: {
    width: '94%',

    height: 43,

    backgroundColor: '#9B2348',

    borderRadius: 7,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,

    marginBottom: 11,

    elevation: 3,
  },


  exploreIcon: {
    color: '#FFFFFF',

    fontSize: 27,

    marginRight: 8,

    fontWeight: '300',
  },


  exploreText: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '800',
  },


  /* ================= BOTÃO CADASTRAR ================= */

  registerButton: {
    width: '94%',

    height: 43,

    backgroundColor: '#FFFFFF',

    borderWidth: 1.5,

    borderColor: '#9B2348',

    borderRadius: 7,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,
  },


  plus: {
    color: '#222222',

    fontSize: 30,

    fontWeight: '300',

    marginRight: 8,

    marginTop: -3,
  },


  registerText: {
    color: '#222222',

    fontSize: 15,

    fontWeight: '700',
  },


  /* ================= RODAPÉ ================= */

  footer: {
    height: 60,

    backgroundColor: '#9B2348',
  },

});