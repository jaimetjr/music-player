import { TracksList } from '@/components/TracksList'
import { defaultStyle } from '@/styles'
import { ScrollView, View } from 'react-native'

const SongsScreen = () => {
	return (
		<View style={defaultStyle.container}>
			<ScrollView>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
