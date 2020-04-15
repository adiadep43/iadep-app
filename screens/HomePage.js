import React, { Component } from '../node_modules/react';
import { 
  Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
	Animated,
	Easing,
	TouchableOpacity,
	Share,
	SafeAreaView
 } from 'react-native';
 import { Ionicons } from '../node_modules/@expo/vector-icons';
import { Audio, Font } from '../node_modules/expo-av';
import { Asset } from '../node_modules/expo-asset';
import Imagese from '../img/avatar.png';
import MenuButton from '../screens/MenuButton';
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


class PlaylistItem {
	constructor(name, uri, image) {
		this.name = name;
		this.uri = uri;
		this.image = image;
	}
}

const PLAYLIST = [
	new PlaylistItem(
		'Rádio IADEP',
    'http://stream.zeno.fm/uw4tnq7n6tzuv',
    ''
	),
];

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#eee';
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = 'Carregando...';
const BUFFERING_STRING = 'Ao Vivo';
const BUFFERING_STRING1 = 'OFFLINE';
const RATE_SCALE = 3.0;

export default class HomePage extends Component{
  constructor(props) {
		super(props);
		this.animatedValue = new Animated.Value(1)
		this.index = 0;
		this.isSeeking = false;
		this.shouldPlayAtEndOfSeek = false;
		this.playbackInstance = null;
		this.state = {
			playbackInstanceName: LOADING_STRING,
			playbackInstancePosition: null,
			playbackInstanceDuration: null,
			shouldPlay: false,
			isPlaying: false,
			isBuffering: false,
			isLoading: true,
			fontLoaded: false,
			volume: 1.0,
			portrait: null,
			showVideo: false,
			muted: false,
			shouldCorrectPitch: true,
			poster: false,
			useNativeControls: false,
			fullscreen: false,
			throughEarpiece: false
		};
		this.STATE_PLAYING = {
			playbackInstanceName: LOADING_STRING,
			playbackInstancePosition: null,
			playbackInstanceDuration: null,
			shouldPlay: false,
			isPlaying: false,
			isBuffering: false,
			isLoading: true,
			fontLoaded: false,
			volume: 1.0,
			portrait: null,
			showVideo: false,
			muted: false,
			shouldCorrectPitch: true,
			poster: false,
			useNativeControls: false,
			fullscreen: false,
			throughEarpiece: false
		};
	}

	componentDidMount() {
		Audio.setAudioModeAsync({
		  allowsRecordingIOS: false,
		  staysActiveInBackground: true,
		  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
		  playsInSilentModeIOS: true,
		  shouldDuckAndroid: true,
		  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
		  playThroughEarpieceAndroid: false
		});

		this._loadNewPlaybackInstance(true);
	}

	async _loadNewPlaybackInstance(playing) {
		if (this.playbackInstance != null) {
			await this.playbackInstance.unloadAsync();
			this.playbackInstance.setOnPlaybackStatusUpdate(null);
			this.playbackInstance = null;
		}

		const source = { uri: PLAYLIST[this.index].uri };
		const initialStatus = {
			shouldPlay: playing,
			rate: this.state.rate,
			volume: this.state.volume,
		};
		const { sound, status } = await Audio.Sound.createAsync (
			source,
			initialStatus,
			this._onPlaybackStatusUpdate
		);
		this.playbackInstance = sound;

		this._updateScreenForLoading(false);
	}

	_updateScreenForLoading(isLoading) {
		if (isLoading) {
			this.setState({
				isPlaying: false,
				playbackInstanceName: LOADING_STRING,
				playbackInstanceDuration: null,
				playbackInstancePosition: null,
				isLoading: true,
			});
		} else {
			this.setState({
				playbackInstanceName: PLAYLIST[this.index].name,
				portrait: PLAYLIST[this.index].image,
				isLoading: false,
			});
		}
	}

	_onPlaybackStatusUpdate = status => {
		if (status.isLoaded) {
			this.setState({
				playbackInstancePosition: status.positionMillis,
				playbackInstanceDuration: status.durationMillis,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
				isBuffering: status.isBuffering,
				rate: status.rate,
				volume: status.volume,
			});
			if (status.didJustFinish) {
				this._advanceIndex(true);
				this._updatePlaybackInstanceForIndex(true);
			}
		} else {
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`);
			}
		}
	};

	_advanceIndex(forward) {
		this.index =
			(this.index + (forward ? 1 : PLAYLIST.length - 1)) %
			PLAYLIST.length;
	}

	async _updatePlaybackInstanceForIndex(playing) {
		this._updateScreenForLoading(true);

		this._loadNewPlaybackInstance(playing);
	}
	
	_onPlayPausePressed = () => {
		if (this.playbackInstance != null) {
			if (this.state.isPlaying) {
				Animated.timing(this.animatedValue, {
					toValue: 0,
					duration: 1050,
					easing: Easing.ease
				}).start()
				this.playbackInstance.stopAsync();
			} else {
				Animated.timing(this.animatedValue, {
					toValue: 1,
					duration: 1050,
					easing: Easing.ease
				}).start()
				this.playbackInstance.playAsync();
			}
		}
	};	
	
  
  render () {
	
    return(
		<LinearGradient
                    colors={['#EAEAEC', 'rgba(139,0,0,0.2)' , '#8B0000']}
                    style={styles.container}>
                <View style={{ alignItems: "center" }}>
                        <MenuButton navigation={this.props.navigation} />
                        
                    <View style={{ alignItems: 'center', marginTop: 80 , justifyContent: "center", flexDirection: "row", alignSelf: "stretch"}}>
                        <Text style={{ fontSize: 30, color: '#8B0000', fontWeight: 'bold', flexGrow: 3, marginLeft: DEVICE_WIDTH*0.25 }}>
							{this.state.playbackInstanceName}
						</Text>
                        <TouchableOpacity style={{flexGrow: 1, marginRight: DEVICE_WIDTH*0.07 }} onPress={() => {
                            return Share.share({
								message: 'Oi eu estou ouvindo a Radio IADEP, venha ouvir comigo! https://www.assembleiadedeusiadep.com/radio',
								title: 'Venha Ouvir Comigo!'
							});
                        }}>
                            <Ionicons 
                                    name={"md-share"}
                                    color="#8B0000"
                                    size={32}
                                    style={styles.icons}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.coverContainer}>
					<Animated.Image
							style={[styles.cover,{
								transform: [
									{
										translateX: this.animatedValue.interpolate({
											inputRange: [0, 450],
											outputRange: [0, 120]
										})
									},
									{
										translateY: this.animatedValue.interpolate({
											inputRange: [0, 450],
											outputRange: [0, 25]
										})
									},
									{
										scaleX: this.animatedValue.interpolate({
											inputRange: [0, 450],
											outputRange: [1, 15]
										})
									},
									{
										scaleY: this.animatedValue.interpolate({
											inputRange: [0, 450],
											outputRange: [1, 12.5]
										})
									}
								]}]}
						source={Imagese}
						resizeMode='cover'
					/>
                    </View>

                    <View style={{ alignItems: "center", marginTop: 32, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }}>
							{this.state.isBuffering ? (
								BUFFERING_STRING
							) : (
								BUFFERING_STRING1
							)}
						</Text>
                        
                    </View>
					<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerTopRow,
						{
							opacity: this.state.isLoading
								? DISABLED_OPACITY
								: 1.0,
						},
					]}
				></View>
                </View>

                

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 25 }}>
                    
					<TouchableOpacity 
						style={styles.playButtonContainer} 
						underlayColor={BACKGROUND_COLOR}
						onPress={this._onPlayPausePressed}
						disabled={this.state.isLoading}>
							
							{this.state.isPlaying ? (
										<FontAwesome5
											name="stop"
											size={27}
											color="#3D425C"
											style={[styles.playButton]}
										></FontAwesome5>
									) : (
										<FontAwesome5
											name="play"
											size={27}
											color="#3D425C"
											style={[styles.playButton, { marginLeft: 8 }]}
										></FontAwesome5>
									)}
                        
                    </TouchableOpacity>
                </View>
				<View
					style={[
						styles.playbackContainer,
						{
							opacity: this.state.isLoading
								? DISABLED_OPACITY
								: 1.0,
						},
					]}
				>
					
				</View>
			</LinearGradient>
			
	)}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEC"
    },
    textLight: {
        color: "#B6B7BF"
    },
    text: {
        color: "#8E97A6"
    },
    textDark: {
        color: "#3D425C"
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: "#5D3F6A",
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 50
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: "#FFF"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: "#3D425C"
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    playButtonContainer: {
        backgroundColor: "#FFF",
        borderColor: "rgba(139,0,0,1.0)",
        borderWidth: 10,
        width: 90,
        height: 90,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
        shadowColor: "#5D3F6A",
        shadowRadius: 30,
        shadowOpacity: 0.5
	},
	buttonsContainerBase: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonsContainerTopRow: {
		maxHeight: 40,
		minWidth: DEVICE_WIDTH / 2.0,
		maxWidth: DEVICE_WIDTH / 2.0,
	},
	playbackContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
});

/*const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: BACKGROUND_COLOR,
	},
    icons: {
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#ddd',
      },
      container2: {
        position: 'relative',
        left: DEVICE_WIDTH*0.20,
        top: DEVICE_HEIGHT*0.02,
        backgroundColor: '#ddd',
      },
	portraitContainer: {
    marginTop: 50,
    alignItems: 'center',
    elevation: 5,
	},
	portrait: {
		height: 275,
    	width: 275,
		borderRadius: 25,
		position: 'relative',
	},
	detailsContainer: {
		height: 40,
		marginTop: 40,
		alignItems: 'center',
	},
	playbackContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	playbackSlider: {
		alignSelf: 'stretch',
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: FONT_SIZE,
		minHeight: FONT_SIZE,
  },
  textTitle1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
	marginTop: 40,
	color: '#ad2630',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
  },
  textAovivo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f33',
  },
  wrapper: {
    borderWidth: 5,
    borderRadius: 50,
    borderColor: '#6d2630',
    padding: 3,
  },
	buttonsContainerBase: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonsContainerTopRow: {
		maxHeight: 40,
		minWidth: DEVICE_WIDTH / 2.0,
		maxWidth: DEVICE_WIDTH / 2.0,
	},
	buttonsContainerMiddleRow: {
		maxHeight: 40,
		alignSelf: 'stretch',
		paddingRight: 20,
	},
	volumeContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		minWidth: DEVICE_WIDTH - 10,
		maxWidth: DEVICE_WIDTH - 10,
	},
	volumeSlider: {
		width: DEVICE_WIDTH - 100,
	},
	buttonsContainerBottomRow: {
		alignSelf: 'stretch',
	},
	rateSlider: {
		width: DEVICE_WIDTH - 80,
	},
});*/