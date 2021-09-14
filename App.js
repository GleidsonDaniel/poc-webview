import React, {useRef} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);
  const handleWebViewNavigationStateChange = ({url}) => {
    if (url === 'https://mei.receita.economia.gov.br/inscricao/acesso') {
      webViewRef.current.injectJavaScript(
        `(function () {
          var token = localStorage.getItem('al-auth-token');
          window.ReactNativeWebView.postMessage(token);
        })();`,
      );
    }
    return true;
  };
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://mei.receita.economia.gov.br/inscricao/acesso'}}
        ref={webViewRef}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        onMessage={event => {
          if (event.nativeEvent.data) {
            console.log(event.nativeEvent.data);
            // WORKING
            // TOKEN
            // eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3NTc5OTgzOTE1MyIsImVtYWlsX3ZlcmlmaWVkIjoidHJ1ZSIsImFtciI6InBhc3N3ZCIsInByb2ZpbGUiOiJodHRwczovL2NvbnRhcy5hY2Vzc28uZ292LmJyLyIsImtpZCI6InJzYTEiLCJpc3MiOiJBcmVhRG9Vc3VhcmlvIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoidHJ1ZSIsInByZWZlcnJlZF91c2VybmFtZSI6Ijc1Nzk5ODM5MTUzIiwicGljdHVyZSI6Imh0dHBzOi8vc3NvLmFjZXNzby5nb3YuYnIvdXNlcmluZm8vcGljdHVyZSIsImF1ZCI6InJlZGVzaW0uZ292LmJyIiwiY29uZmlhYmlsaWRhZGVzIjpbeyJuaXZlbCI6MTA0LCJkZXNjcmljYW8iOiJTRUxPX0VNQUlMIn0seyJuaXZlbCI6MTA1LCJkZXNjcmljYW8iOiJTRUxPX1RFTEVGT05FIn0seyJuaXZlbCI6MTAxLCJkZXNjcmljYW8iOiJTRUxPX0tCQV9QUkVWSURFTkNJQSJ9LHsibml2ZWwiOjEsImRlc2NyaWNhbyI6IkNPTkZPUk1JREFERSJ9LHsibml2ZWwiOjMsImRlc2NyaWNhbyI6IkNFUlRJRklDQURPIERJR0lUQUwifV0sInRlbGVmb25lX2NlbHVsYXJfdmVyaWZpY2FkbyI6dHJ1ZSwiYXV0aF90aW1lIjoxNjMxNjMxMjI2LCJzY29wZSI6WyJlbWFpbCIsImdvdmJyX2VtcHJlc2EiLCJvcGVuaWQiLCJwaG9uZSIsInByb2ZpbGUiXSwibmFtZSI6IkdsZWlkc29uIERhbmllbCBKYWNpbnRvIGRhIFNpbHZhIiwicGhvbmVfbnVtYmVyIjoiNjI5OTM1NDUxODIiLCJ0ZWxlZm9uZV9jZWx1bGFyIjoiNjI5OTM1NDUxODIiLCJleHAiOjE2MzE2MzQ4MjgsImlhdCI6MTYzMTYzMTIyOCwianRpIjoiNGRhM2Q1MTItYjZiMC00MTVmLWE5N2YtNTc0NjBhMzBmNzgwIiwiZW1haWwiOiJnbGVpZHNvbjEwZGFuaWVsQGhvdG1haWwuY29tIn0.SXax9uDG6CXzNBlm539RnwYK9686Knjv9OSkAtTGhBp-9y9rCznKYtMSNvGYamhhQLNZf2ooFG_MIfMhBUrUuon0bR44L62MnznCechjAx7EuW8pMhjE5f-CG1mz42CAfGzIaz7V6rjZAwHVdjoO2fxuPE4lfTxd05_RJkFTrynx1ZmRi37NES0fTA237a6473wYLJpf74N0tqeT7QQONM7UFAU36v4VDr2nNmgbo7GHWIQ-55WmqSucK18ygfVmiW3X5fXKmkcWPUybTgbkJn_7T4Bds_TBfnoUNbzlBJNM0Lrj6lGy9kPAb9-rRnjzhb-CAsExte5McqAyOZ6ma8ToVlgUfwzgoOJp6BWIhrlriSRmwx5vjRpNUQPTDBCSImrKbNKDRxNlS0JkgvyDaZzwl5mW21q1Q9Yo-xAFGM3dHSwp7b3Vcq-ACiX-Emld1lZrEqF575HOKZjyMFNysvNXOA1Qe2qgkby2qjCjv6fNvVoEeckbVZJJNYfY25KqZyLaewngu3Mhp9Cirq6mrzkSyZ3fKL8bhFu3vy_FBXwKkvOCFM9wZLWTNoUFG4YdcvzVeV26J2xEqXay7vPJ6o-_MhhZXlLGPahHgEs8wCEwmwxDh4uNKVJDOYqN3CZrYMCApOIKCUq0gzlhwdvE7GllUiPxv-NZh0M3O_OWQw
          }
        }}
      />
    </View>
  );
}
