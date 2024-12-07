import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../header/header.jsx";
import TextBox from "../../textbox/textbox.jsx";
import Button from "../../button/button.jsx";
import { useState } from "react";

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function LoadLogin(){
        console.log(email, password)
    }

    return <>

        <View style={styles.container}>
            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>
                <Header texto="Acesse sua conta" />

                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox 
                        label="E-mail"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        />
                    </View>

                    <View style={styles.form}>
                        <TextBox
                         label="Senha" 
                         isPassword={true} 
                         onPress={setPassword}
                         onChangeText={(text) => setPassword(text)}
                         value={password}
                         />
                    </View>

                    <View style={styles.form}> 
                        <Button texto="Acessar" onPress={() => props.navigation.navigate("home")}/>
                    </View>
                </View>
            </ScrollView>
        </View >
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("register")}>
                <Text style={styles.footerText}>Criar minha conta</Text>
            </TouchableOpacity>
        </View>



    </>
}

export default Login;