import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
const {
	Text,
	ScrollView,
	View,
	TextInput,
	Image,
	TouchableHighlight,
	StyleSheet,
} = ReactNative

class Home extends Component {
	searchPressed() {
		this.props.fetchRecipes('bacon,cheese');
	}
	render() {
		return <View style={{marginTop: 30}}>
			<View>
				<TouchableHighlight onPress={ () => this.searchPressed() }>
				<Text>Fetch Recipes</Text>
				</TouchableHighlight>
			</View>
			<ScrollView>
				
			</ScrollView>
		</View>
	}

}

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home);