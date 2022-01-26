
import {Dimensions, StyleSheet, Platform} from 'react-native';
const window = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utility/index';

const styles = StyleSheet.create({
  userImg: {
    ...Platform.select({
      ios: {
        // width: wp("5%"),
        // height: hp("3%"),
      },
      android: {
        // width: wp('6%'),
        // height: hp('2.5%'),
      },
    }),

    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: '5%',
    alignItems: 'center',
    // alignItems: "flex-start",
    // marginLeft: "5%"
  },
  backgroundImage: {height: '100%', width: '100%'},
  createAccountView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    ...Platform.select({
      os: {
        marginTop: hp('10%'),
      },
      android: {
        marginTop: hp('10%'),
      },
    }),
  },
  createAccountText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  submitView: {
    margin: '5%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...Platform.select({
      os: {
        height: hp('5%'),
      },
      android: {
        height: hp('6%'),
      },
    }),
  },
  submitText: {
    padding: 10,
    color: '#0097F1',
    fontWeight: 'bold',
    fontSize: 15,
  },
  memberView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerView: {
    marginTop: hp('5%'),
    margin: hp('5%'),
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default styles;