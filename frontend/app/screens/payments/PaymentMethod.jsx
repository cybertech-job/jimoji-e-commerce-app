import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Stack, useRouter } from 'expo-router'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {useStripe} from "@stripe/stripe-react-native"
import axios from "axios"

export default function PaymentMethod() {
    const router = useRouter()

    const stripe = useStripe()

    const [activeTab, setActiveTab] = useState('details') // For tab switching
    const fullText = `Lorem ipsum dolor sit amet consectetur. Ornare id pulvinar nunc fermentum erat. Amet ac urna lectus dui tempor adipiscing tortor sed massa. Parturient adipiscing leo platea nisl amet quis. Ut vestibulum tellus in suspendisse diam lectus congue elit blandit. lobortis. leo platea nisl amet quis. tellus in suspendisse diam lectus congue elit blandit. lobortis Lorem ipsum dolor sit amet consectetur. Ornare id pulvinar nunc fermentum erat. Amet ac urna lectus dui tempor adipiscing tortor sed massa. Parturient adipiscing leo platea nisl amet quis. Ut vestibulum tellus in suspendisse diam lectus congue elit blandit. lobortis. leo platea nisl amet quis. tellus in suspendisse diam lectus congue elit blandit. lobortis.`
    const truncatedText = `${fullText.slice(0, 450)}...`
    const quantity = [5, 10, 20, 25]
  
    const [amount, setAmount] = useState(450);
    const [name, setName] = useState('Stanley')
    const [totalQuantity, setTotalQuantity] = useState('');
  
    handleDecrement = () => {
      if(count<=1){
        return null
      }
      else{
        setCount(count - 1)
      }
    }
  
    const onCreateOrder = async () => {
      if (amount && password && username && phone) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          const idToken = await userCredential.user.getIdToken();
          const userDetails = {
            email, 
            password, 
            name: username,
            phone
          }
  
          await axios.post('http://192.168.145.75:5000/api/v1/auth/register', userDetails, // Request body
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${idToken}`, // Bearer token
              },
            }
          );
  
          if(userCredential){
            router.push('/screens/auth/Otp');
          }
        } catch (error) {
          console.error(error.response?.data?.error || error.message);
        }
      }
    }
  
    const paymentDetails ={
      name, 
      amount
    }
  
    const createPaymentIntent = async () => {
      try {
        const finalAmount = parseInt(amount, 10);
    
        if (finalAmount < 1) {
          return Alert.alert("Amount must not be less than 1");
        }
    
        // Send payment details to the backend using Axios
        const response = await axios.post(
          "http://192.168.145.75:5000/api/v1/order/payment",
          paymentDetails
        );
    
        // Check if the request was successful
        const data = response.data;
    
        if (!response.status || response.status !== 200) {
          return Alert.alert(data.message || "Failed to create payment intent.");
        }
    
        // Initialize the payment sheet with the client secret
        const initSheet = await stripe.initPaymentSheet({
          paymentIntentClientSecret: data.clientSecret,
          merchantDisplayName: "Jimoji Gadget",
          googlePay: true, // Enable Google Pay if supported
          applePay: true,
        });
    
        if (initSheet.error) {
          console.error(initSheet.error);
          return Alert.alert(initSheet.error.message);
        }
    
        // Present the payment sheet
        const presentSheet = await stripe.presentPaymentSheet({
          clientSecret: data.clientSecret,
        });
    
        if (presentSheet.error) {
          console.error(presentSheet.error);
          return Alert.alert(presentSheet.error.message);
        }
    
        // Payment successful
        Alert.alert("Payment successful!");
        // router.push('/screens/payments/PaymentMethod'); // Uncomment if using navigation
      } catch (err) {
        console.error(err);
        Alert.alert("Payment failed!");
      }
    };
    const methods = [
        {
            id: 1,
            icon: "credit-card-chip",
            title: "Pay with card",
            detail: "Pay with Debit card or Credit card"
        },
        {
            id: 2,
            icon: "bank",
            title: "Bank Transfer",
            detail: "Pay with Bank Transfer"
        },
        {
            id: 3,
            icon: "cash-multiple",
            title: "Cash Delivery",
            detail: "Pay cash on delivery"
        },
        {
            id: 4,
            icon: "cloud-check",
            title: "Saved Accounts",
            detail: "Choose from saved Accounts"
        }
    ]


  return (
    <>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={{backgroundColor:"#43425B", flex:1, paddingTop: 50, }}>
            <View style={{display:"flex", alignItems:"center"}}>
                <Text style={{fontSize: 24, fontWeight:"bold", color:"white"}}>Payment method</Text>
            </View>

            <View style={{display: "flex", flexDirection: "column", gap: 25, alignItems: "center", marginTop: 30}}>
                {
                    methods.map((item) => (
                        <TouchableOpacity onPress={createPaymentIntent} key={item.id} style={{display:"flex", flexDirection:"row", alignItems: "center", gap:20, height: 91, width: "80%", backgroundColor:"#25244F", borderRadius: 20, paddingLeft: 30}}>
                            <View>
                                <MaterialCommunityIcons name={item.icon} size={34} color="white" />
                            </View>
                            <View>
                                <Text style={{fontSize:16, fontWeight:"semibold", color:"white"}}>
                                    {item.title}
                                </Text>
                                <Text style={{fontSize:10, fontWeight:"normal", color:"white", paddingTop: 4}}>
                                    {item.detail}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:4, alignItems:"center", paddingTop: 30}}>
              <MaterialIcons name="lock" size={18} color="white" />
              <Text style={{color:"white", fontSize:12}}>Your details are saved and stored securely.</Text>
              <Text style={{color:"#0031B0", fontSize:12}}>Terms Apply</Text>
            </View>

        </View>
    
    </>
  )
}

const styles = StyleSheet.create({})