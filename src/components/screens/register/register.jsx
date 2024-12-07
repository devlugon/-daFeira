import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../register/register.style.js";
import Header from "../../header/header.jsx";
import TextBox from "../../textbox/textbox.jsx";
import Button from "../../button/button.jsx";
import { useState } from "react";

function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    return <>

        <View style={styles.container}>

            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>
                <Header texto="Criar sua conta" />

                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox
                            label="Nome"
                            onChangeText={(text) => setName(text)}
                            value={name} />
                    </View>

                    <View style={styles.form}>
                        <TextBox
                            label="E-mail"
                            onChangeText={(text) => setEmail(text)}
                            value={email} />
                    </View>

                    <View style={styles.form}>
                        <TextBox
                            label="Escolha uma senha"
                            isPassword={true}
                            onPress={setPassword}
                            onChangeText={(text) => setPassword(text)}
                            value={password} />
                    </View>

                    <View style={styles.form}>
                        <TextBox
                            label="Confirme sua senha"
                            isPassword={true}
                            onPress={setPassword2}
                            onChangeText={(text) => setPassword2(text)}
                            value={password2} />
                    </View>

                    <View style={styles.form}>
                        <Button texto="Próximo passo" onPress={() => props.navigation.navigate("register2")} />
                    </View>

                </View>
            </ScrollView>
        </View >

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                <Text style={styles.footerText}>Acessar minha conta</Text>
            </TouchableOpacity>
        </View>

    </>


}

export default Register;