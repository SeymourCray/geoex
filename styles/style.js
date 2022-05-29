import { StyleSheet, Dimensions } from 'react-native';

export const gStyle = StyleSheet.create({
    title: {
        fontFamily: 'Nunito-Medium',
        color: 'white',
        alignSelf:'center',
        fontSize: 40,
        marginTop:'10%'
    },
    logContainer: {
        flex: 1,
        backgroundColor: '#092642',
    },
    avoidingView: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        fontFamily:'Nunito-Light'
    },
    inputContainer: {
        width: '85%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: '#174276'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop:7
    },
    buttonContainer: {
        width: '60%',
        marginTop: '10%',
    },
    logRegButton: {
        backgroundColor: '#174276',
        width: '100%',
        alignItems: 'center',
        padding: 20,
        marginVertical:'5%',
        borderRadius: 30,
    },
    boldText: {
        fontFamily: 'Nunito-Medium',
        color: 'white',
        fontSize: 20
    },
    mainText: {
        fontFamily: 'Nunito-Light',
        color: 'white',
        fontSize:15
    },
    personWindow: {
        backgroundColor: '#235a9f',
        width: '100%',
        alignItems:'flex-start',
        padding: 25,
        marginTop:'2%',
        borderRadius: 10,
    },
    headerHome: {
        flexDirection: 'row',
        backgroundColor: '#174276',
        paddingVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems:'baseline'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#174276'
    },
    List: {
        backgroundColor: '#092642',
    },
    mainTitle: {
        fontFamily: 'Nunito-Medium',
        color: 'white',
        fontSize: 40
    },
    headerContacts: {
        backgroundColor: '#174276',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '5%',
        zIndex:2
    },
    newPersonWindow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        padding: 20,
        marginTop:'2%',
        borderWidth: 2,
        borderColor:'white'
    },
    goBack: {
        width: '60%',
        backgroundColor: '#235a9f',
        borderRadius:30,
        alignItems: 'center',
        paddingVertical:'2%'
    },
    map: {
        width: Dimensions.get('window').width,
        height: '80%',
        zIndex:0
   },
   backView: {
        backgroundColor: '#174276',
        paddingVertical: '3%',
        alignItems: 'center',
        zIndex:0
    },
    marker: {
        padding: 10,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius:30
    },
    board: {
        width: '100%',
        padding: 15,
        zIndex: 1,
        borderRadius:20,
        backgroundColor: 'white',
        position:'absolute'
    },
    headerMap: {
        backgroundColor: '#174276',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '5%',
        paddingTop:'15%',
        zIndex:2
    },
    addNote: {
        borderRadius: 10,
        padding: 10,
        width: '100%',
        borderColor: '#060c2a',
        borderWidth: 1,
        height:Dimensions.get('window').height*0.1
    },
    delSaveButton: {
        backgroundColor: '#235a9f',
        borderRadius: 20,
        padding: 10,
        width: '45%',
        alignItems:'center'
    },
    delSaveView: {
        marginTop: '5%',
        justifyContent:'space-evenly',
        flexDirection:'row',
        borderRadius: 20,
        width: '100%'
    }
});