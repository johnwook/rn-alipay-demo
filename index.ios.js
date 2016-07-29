/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Alipay from 'rn-alipay';

class AlipayDemo extends Component {
    goAlipay () {
        const privateKey = 'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAN0fUY6FILuklvzsxpsw/b/oPlgMIH/OzKYwqYjq2gtIUh1DiX0JCC1uWkKyfgUHur/idHk+NCCh6o9wr5M3O10LKO5xB3m7YOtedNoxhU5hcx5xpFObMWp4g+RDZL8fI+Ih2v0bJq1yDKZ+PEkF6lTo7AWezIjm9WU/QTjd5MAnAgMBAAECgYEAkV2hdBw45KLTT/sopaWTa7H2KlPumZcOGsMq8QPTzE8DDJH1tOlXIubFF8vX5N6r+rGY+IvYIQvQ8/OUuSc6Mjsp8gRvfwlQqN30ruBqFxF+yhvtQ/vznGLESQbG0Hab8tR7Gmwy2cmfRPbAs56yiY1jnAdm64MdtGIEYs99LEECQQD/GUse+a0JXg6FB2RNs+e9iJkFQd3UgwbCpq4l1ZEVuX3yY/QmDvkWuVlF17iSHc8DNvKPIz78oWi+lnq0+s2PAkEA3edMJp8kIZn8xv+gNp5Hsou9GDQpVR9UrNornaS3vMNMDw7wk3jIdhTTQdGSYY5w1vbtA+cRJXpr4P3+2xNH6QJAYjbKxVI7XK/pxy3hYEkzn7VHtM53KaqIn8iso8Rl54dTBk+VYFHDdQxHYqx7U0ZGvWYaXSGkzn8WZMpq0+L74QJBAL1bpDMM+HMoCXnzJ0+Ub9BfyIQ/9slpzAMYxcFnj1coPN5YvFjL6BxDlycCZGyVdZsq6YS8CHi36Bj+Bh4CbQkCQQDZg5GKtz/v/tavnS5cUyTW/FLJc5dHRf7tsqr7/9ZSivv7rSg4TghzeGalXkZXVsaeO+pxzcdWUEQc9DBn385F';
        const data = {
            privateKey,
            partner: '2088121766951093',
            seller: 'dev@huiseoul.com',
            outTradeNO: '1231231231236', //订单ID（由商家自行制定）
            subject: '测试商品标题', //商品标题
            body: '测试产品描述', //商品描述
            totalFee: '0.01', //商品价格
            notifyURL: 'http://www.huiseoul.com', //回调URL
            service: 'mobile.securitypay.pay',
            paymentType: '1',
            inputCharset: 'utf-8',
            itBPay: '30m',
            showURL: 'm.alipay.com',
            appSchemeIOS: 'testapp20',
            outContext: {
              currency: 'USD',
              forex_biz: 'FP'
            }
        };
        Alipay.pay(data).then((msg) => {
            console.log(msg);
        }, (e) => {
            console.log(e);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    点击进入支付宝支付
                </Text>
                <Text style={styles.instructions}>
                    具体参数请在页面中配置
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.goAlipay.bind(this)}>
                    <Text style={styles.buttonText}>去支付</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        marginTop: 10,
        padding: 10,
        borderColor: '#ff6600',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ff6600',
    },
});

AppRegistry.registerComponent('alipayDemo', () => AlipayDemo);
