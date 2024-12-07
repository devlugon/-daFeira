import { View, Text, TouchableOpacity, ScrollView, ViewComponent } from "react-native";
import { styles } from "../register2/register2.style.js";
import Header from "../../header/header.jsx";
import TextBox from "../../textbox/textbox.jsx";
import Button from "../../button/button.jsx";
import { useState } from "react";

function Register2() {

    const[adress, setAdress] = useState("");
    const[compl, setCompl] = useState("");
    const[quarter, setQuarter] = useState("");
    const[city, setCity] = useState("");
    const[province, setProvince] = useState("");
    const[cep, setCep] = useState("");
    
    

    return <>

        <View style={styles.container}>

            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>
                <Header texto="Informe seu endereço" />

                <View style={styles.formGroup}>
                    <View style={styles.formHorizontal}>

                        <View style={styles.form70}>
                            <TextBox 
                            label="Endereço"
                            onChangeText={(text) => setAdress(text)}
                            value={adress} />
                        </View>

                        <View style={styles.form30}>
                            <TextBox
                            label="Compl"
                            onChangeText={(text) => setCompl(text)}
                            value={compl} />
                        </View>

                    </View>

                    <View style={styles.form}>
                        <TextBox
                            label="Bairro"
                            onChangeText={(text) => setQuarter(text)}
                            value={quarter} />
                    </View>

                    <View style={styles.form}>
                        <View style={styles.formHorizontal}>

                            <View style={styles.form70}>
                                <TextBox
                                label="Cidade"
                                onChangeText={(text) => setCity(text)}
                                value={city} />
                            </View>

                            <View style={styles.form30}>
                                <TextBox
                                label="Estado"
                                onChangeText={(text) => setProvince(text)}
                                value={province} />
                            </View>

                        </View>
                    </View>

                    <View style={styles.form}>
                        <TextBox
                            label="CEP"
                            onChangeText={(text) => setCep(text)}
                            value={cep} />
                    </View>

                    <View style={styles.form}>
                        <Button texto="Criar minha conta" />
                    </View>

                </View>
            </ScrollView>
        </View >

        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>Acessar minha conta</Text>
            </TouchableOpacity>
        </View>

    </>


}

export default Register2;