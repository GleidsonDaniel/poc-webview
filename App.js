import React from 'react'
import { View, Text } from 'react-native'
import WebView from 'react-native-webview'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://mei.receita.economia.gov.br/inscricao/acesso' }} />
    </View>
  )
}
