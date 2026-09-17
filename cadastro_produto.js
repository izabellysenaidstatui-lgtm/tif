import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CadastroProduto() {

  const [categoria, setCategoria] = useState('Selecione');
  const [quimico, setQuimico] = useState('Selecione');

  const [categoriaAberta, setCategoriaAberta] = useState(false);
  const [quimicoAberto, setQuimicoAberto] = useState(false);

  // DIAS DE REPOSIÇÃO
  const [dias, setDias] = useState({
    Domingo: false,
    'Segunda-feira': false,
    'Terça-feira': false,
    'Quarta-feira': false,
    'Quinta-feira': false,
    'Sexta-feira': false,
    Sábado: false,
  });

  // FUNÇÃO PARA LIGAR/DESLIGAR OS DIAS
  const alterarDia = (dia) => {
    setDias({
      ...dias,
      [dia]: !dias[dia],
    });
  };

  const listaDias = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  return (
    <View style={styles.container}>

      {/* ================= CABEÇALHO ================= */}

      <View style={styles.header}>

        <View style={styles.logoArea}>

          <Image
            source={require('./assets/logo_lumora.png')}
            style={styles.logo}
          />

          <Text style={styles.logoTexto}>
            LUMORA
          </Text>

        </View>

        <Ionicons
          name="menu"
          size={38}
          color="#FFFFFF"
        />

      </View>


      {/* ================= CONTEÚDO ================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* TÍTULO */}

        <View style={styles.tituloArea}>

          <View style={styles.tituloLinha}>

            <Text style={styles.mais}>
              +
            </Text>

            <Text style={styles.titulo}>
              Cadastrar Produto
            </Text>

          </View>

          <Text style={styles.subtitulo}>
            Cadastre aqui os produtos para{'\n'}
            manter seu estoque sempre atualizado.
          </Text>

        </View>


        {/* ================= CARD ================= */}

        <View style={styles.card}>


          {/* NOME DO PRODUTO */}

          <Text style={styles.label}>
            Nome do Produto
          </Text>

          <View style={styles.inputBox}>

            <MaterialCommunityIcons
              name="cube-outline"
              size={23}
              color="#777077"
            />

            <TextInput
              style={styles.input}
              placeholder="Digite o nome do produto"
              placeholderTextColor="#8C858D"
            />

          </View>


          {/* DATA */}

          <Text style={styles.label}>
            Data de validade
          </Text>

          <View style={styles.inputBox}>

            <Ionicons
              name="calendar-outline"
              size={23}
              color="#777077"
            />

            <TextInput
              style={styles.input}
              placeholder="Digite a data de validade"
              placeholderTextColor="#8C858D"
            />

          </View>


          {/* PREÇO + QUANTIDADE */}

          <View style={styles.linha}>

            <View style={styles.colunaPreco}>

              <Text style={styles.label}>
                Preço do produto
              </Text>

              <View style={styles.inputBox}>

                <Text style={styles.rs}>
                  R$
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="0,00"
                  placeholderTextColor="#8C858D"
                  keyboardType="decimal-pad"
                />

              </View>

            </View>


            <View style={styles.colunaQuantidade}>

              <Text style={styles.label}>
                Qtd. em estoque
              </Text>

              <View style={styles.inputBox}>

                <TextInput
                  style={styles.input}
                  placeholder="Quantidade"
                  placeholderTextColor="#8C858D"
                  keyboardType="numeric"
                />

              </View>

            </View>

          </View>


          {/* PRODUTO QUÍMICO + CATEGORIA */}

          <View style={styles.linha}>

            {/* QUÍMICO */}

            <View style={styles.coluna}>

              <Text style={styles.label}>
                Produto químico?
              </Text>

              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => {
                  setQuimicoAberto(!quimicoAberto);
                  setCategoriaAberta(false);
                }}
              >

                <Text style={styles.selectTexto}>
                  {quimico}
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={20}
                  color="#777077"
                />

              </TouchableOpacity>


              {quimicoAberto && (

                <View style={styles.dropdown}>

                  <TouchableOpacity
                    style={styles.opcao}
                    onPress={() => {
                      setQuimico('Sim');
                      setQuimicoAberto(false);
                    }}
                  >
                    <Text style={styles.opcaoTexto}>
                      Sim
                    </Text>
                  </TouchableOpacity>


                  <TouchableOpacity
                    style={styles.opcao}
                    onPress={() => {
                      setQuimico('Não');
                      setQuimicoAberto(false);
                    }}
                  >
                    <Text style={styles.opcaoTexto}>
                      Não
                    </Text>
                  </TouchableOpacity>

                </View>

              )}

            </View>


            {/* CATEGORIA */}

            <View style={styles.coluna}>

              <Text style={styles.label}>
                Categoria
              </Text>

              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => {
                  setCategoriaAberta(!categoriaAberta);
                  setQuimicoAberto(false);
                }}
              >

                <Text style={styles.selectTexto}>
                  {categoria}
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={20}
                  color="#777077"
                />

              </TouchableOpacity>


              {categoriaAberta && (

                <View style={styles.dropdown}>

                  {[
                    'Desinfetante',
                    'Multiuso',
                    'Vidros',
                    'Sanitário',
                    'Piso',
                  ].map((item) => (

                    <TouchableOpacity
                      key={item}
                      style={styles.opcao}
                      onPress={() => {
                        setCategoria(item);
                        setCategoriaAberta(false);
                      }}
                    >

                      <Text style={styles.opcaoTexto}>
                        {item}
                      </Text>

                    </TouchableOpacity>

                  ))}

                </View>

              )}

            </View>

          </View>


          {/* DESCRIÇÃO */}

          <Text style={styles.label}>
            Descrição do Produto
          </Text>

          <TextInput
            style={styles.descricao}
            placeholder="Digite uma descrição do produto"
            placeholderTextColor="#8C858D"
            multiline
          />


          {/* ================= ORIGEM ================= */}

          <View style={styles.linha}>

            <View style={styles.colunaOrigem}>

              <Text style={styles.label}>
                Origem do produto
              </Text>


              <View style={styles.radioLinha}>

                <View style={styles.radioSelecionado} />

                <Text style={styles.radioTexto}>
                  Nacional
                </Text>

              </View>


              <View style={styles.radioLinha}>

                <View style={styles.radio} />

                <Text style={styles.radioTexto}>
                  Importado
                </Text>

              </View>

            </View>


            {/* ================= DIAS ================= */}

            <View style={styles.colunaDias}>

              <Text style={styles.label}>
                Dias de reposição
              </Text>


              {listaDias.map((dia) => (

                <View
                  key={dia}
                  style={styles.diaLinha}
                >

                  <Switch
                    value={dias[dia]}
                    onValueChange={() => alterarDia(dia)}
                    trackColor={{
                      false: '#C9C1C9',
                      true: '#D88BA5',
                    }}
                    thumbColor={
                      dias[dia]
                        ? '#9B2348'
                        : '#F5F5F5'
                    }
                    ios_backgroundColor="#C9C1C9"
                    style={styles.switch}
                  />

                  <Text style={styles.diaTexto}>
                    {dia}
                  </Text>

                </View>

              ))}

            </View>

          </View>


          {/* ================= IMAGEM ================= */}


          {/* ================= BOTÃO ================= */}

          <TouchableOpacity style={styles.botao}>

            <Text style={styles.botaoTexto}>
              Cadastrar produto
            </Text>

          </TouchableOpacity>


        </View>

      </ScrollView>

    </View>
  );
}


/* ================================================= */
/* ===================== ESTILOS =================== */
/* ================================================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7E8FA',
  },


  /* CABEÇALHO */

  header: {
    height: 92,
    backgroundColor: '#9B2348',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
  },

  logoTexto: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginLeft: 7,
    letterSpacing: 0.5,
  },


  /* SCROLL */

  scroll: {
    paddingBottom: 40,
  },


  /* TÍTULO */

  tituloArea: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 18,
  },

  tituloLinha: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  mais: {
    color: '#9B2348',
    fontSize: 49,
    fontWeight: '300',
    marginRight: 7,
    lineHeight: 50,
  },

  titulo: {
    color: '#9B2348',
    fontSize: 28,
    fontWeight: '900',
  },

  subtitulo: {
    textAlign: 'center',
    color: '#A33D64',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 4,
  },


  /* CARD */

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    borderRadius: 12,
    padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 3,
  },


  /* LABEL */

  label: {
    color: '#401A36',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 5,
  },


  /* INPUT */

  inputBox: {
    height: 44,
    backgroundColor: '#DCD3DD',
    borderWidth: 1,
    borderColor: '#8E878F',
    borderRadius: 9,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
    marginBottom: 11,
  },

  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 7,
    color: '#4F4A50',
  },

  rs: {
    color: '#777077',
    fontSize: 14,
    fontWeight: '800',
  },


  /* COLUNAS */

  linha: {
    flexDirection: 'row',
    gap: 9,
  },

  coluna: {
    flex: 1,
    position: 'relative',
  },

  colunaPreco: {
    flex: 1,
  },

  colunaQuantidade: {
    flex: 1,
  },


  /* SELECT */

  selectTexto: {
    flex: 1,
    color: '#777077',
    fontSize: 13,
  },

  dropdown: {
    position: 'absolute',
    top: 66,
    left: 0,
    right: 0,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#999099',
    borderRadius: 8,

    zIndex: 100,
    elevation: 8,

    overflow: 'hidden',
  },

  opcao: {
    paddingVertical: 11,
    paddingHorizontal: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  opcaoTexto: {
    color: '#4F4A50',
    fontSize: 13,
  },


  /* DESCRIÇÃO */

  descricao: {
    height: 75,

    backgroundColor: '#DCD3DD',

    borderWidth: 1,
    borderColor: '#8E878F',
    borderRadius: 9,

    padding: 10,

    fontSize: 14,
    color: '#4F4A50',

    textAlignVertical: 'top',

    marginBottom: 14,
  },


  /* ORIGEM */

  colunaOrigem: {
    flex: 0.9,
  },

  radioLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  radio: {
    width: 16,
    height: 16,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#999099',

    marginRight: 8,
  },

  radioSelecionado: {
    width: 16,
    height: 16,

    borderRadius: 8,

    backgroundColor: '#9B2348',

    borderWidth: 3,
    borderColor: '#E9C3D3',

    marginRight: 8,
  },

  radioTexto: {
    color: '#665E67',
    fontSize: 13,
  },


  /* DIAS */

  colunaDias: {
    flex: 1.1,
  },

  diaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },

  switch: {
    transform: [
      { scaleX: 0.75 },
      { scaleY: 0.75 },
    ],
    marginLeft: -5,
    marginRight: -4,
  },

  diaTexto: {
    fontSize: 12,
    color: '#665E67',
  },


  /* UPLOAD */

  upload: {
    height: 52,

    backgroundColor: '#E4DCE5',

    borderWidth: 1,
    borderColor: '#999099',
    borderRadius: 9,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    marginBottom: 17,
  },

  uploadTexto: {
    color: '#777077',
    fontSize: 13,
    marginLeft: 9,
  },


  /* BOTÃO */

  botao: {
    height: 46,

    backgroundColor: '#A3224D',

    borderRadius: 9,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 2,
    borderColor: '#E2A8BE',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3,

    elevation: 2,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

});