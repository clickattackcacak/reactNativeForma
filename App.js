import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback, ScrollView
} from 'react-native';



export default class App extends Component {
  state = {
    ime: '',
    prezime: '',
    pozdrav: '',
    hi: false,
    hello: false,
    vozdra: false,
    textVisible: false
  }

  _onPressButton() {

  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.ViewInput}>

          <View style={{ flex: 1, height: '90%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Text style={styles.text}>Unesi ime:</Text>
          </View>

          <View style={{ flex: 2, height: '100%', justifyContent: 'flex-end' }}>
            <TextInput
              style={styles.TextInput}
              placeholder='Ime'
              underlineColorAndroid='white'
              placeholderTextColor="grey"
              onChangeText={(ime) => {
                this.setState({ ime });
              }}
              value={this.state.ime}
              returnKeyType="next"
              onSubmitEditing={() => this.prezime.focus()}
            >
            </TextInput>
          </View>

        </View>

        <View style={styles.ViewInput}>

          <View style={{ flex: 1, height: '90%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Text style={styles.text}>Unesi prezime:</Text>
          </View>

          <View style={{ flex: 2, height: '100%', justifyContent: 'flex-end' }}>
            <TextInput
              style={styles.TextInput}
              placeholder='Prezime'
              placeholderTextColor="grey"
              onChangeText={(prezime) => {
                this.setState({ prezime });
              }}
              value={this.state.prezime}
              ref={(input) => this.prezime = input}
            >
            </TextInput>
          </View>

        </View>

        <View style={{ flex: 0.5, justifyContent: 'flex-end' }}><Text style={styles.text}>Izaberite pozdravnu poruku:</Text></View>

        <View style={styles.ViewCheckBox}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

            <View style={styles.Buttons}>

              <TouchableOpacity onPress={() => this.setState({ hi: true, hello: false, vozdra: false, pozdrav: 'Hi' })} style={{ height: 20, width: 20, backgroundColor: this.state.hi ? '#ffb3b3' : '#cc0000', margin: 4, borderRadius: 10 }}></TouchableOpacity><Text>Hi</Text><View style={{ width: 50 }}></View>
              <TouchableOpacity onPress={() => this.setState({ hi: false, hello: true, vozdra: false, pozdrav: 'Hello' })} style={{ height: 20, width: 20, backgroundColor: this.state.hello ? '#ffb3b3' : '#cc0000', margin: 4, borderRadius: 10 }}></TouchableOpacity><Text>Hello</Text><View style={{ width: 50 }}></View>
              <TouchableOpacity onPress={() => this.setState({ hi: false, hello: false, vozdra: true, pozdrav: 'Vozdra' })} style={{ height: 20, width: 20, backgroundColor: this.state.vozdra ? '#ffb3b3' : '#cc0000', margin: 4, borderRadius: 10 }}></TouchableOpacity><Text>Vozdra</Text>

            </View>
          </View>

        </View>

        <View style={{ flex: 0.5, alignSelf: 'center', height: '100%', paddingBottom: 18 }}>

          <Button onPress={() => this.setState({ textVisible: true })} title='SUBMIT' color='#ff5c33' />

        </View>

        <View style={{ flex: 0.5 }}>
          {this.state.textVisible &&

            <Text>{this.state.ime + ' ' + this.state.prezime + ', izabrali ste pozdrav ' + this.state.pozdrav}</Text>
          }
        </View>

        <View style={styles.ScrollView}>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>Primer razlicitih button-a</Text>

            <View style={{ flex: 1, height: '100%', justifyContent: 'space-between', marginTop: 10 }}>

              <TouchableHighlight style={styles.button} onPress={this._onPressButton} underlayColor="white">
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </TouchableHighlight>

              <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </TouchableOpacity >

              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableWithoutFeedback
                onPress={this._onPressButton} >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>Primer ScrollView-a</Text>

            <ScrollView style={{ marginTop: 5 }}>

              <Text>Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have."

He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.

These excellant intentions were strengthed when he enterd the Father Superior's diniing-room, though, stricttly speakin, it was not a dining-room, for the Father Superior had only two rooms alltogether; they were, however, much larger and more comfortable than Father Zossima's. But tehre was was no great luxury about the furnishng of these rooms eithar. The furniture was of mohogany, covered with leather, in the old-fashionned style of 1820 the floor was not even stained, but evreything was shining with cleanlyness, and there were many chioce flowers in the windows; the most sumptuous thing in the room at the moment was, of course, the beatifuly decorated table. The cloth was clean, the service shone; there were three kinds of well-baked bread, two bottles of wine, two of excellent mead, and a large glass jug of kvas -- both the latter made in the monastery, and famous in the neigborhood. There was no vodka. Rakitin related afterwards that there were five dishes: fish-suop made of sterlets, served with little fish paties; then boiled fish served in a spesial way; then salmon cutlets, ice pudding and compote, and finally, blanc-mange. Rakitin found out about all these good things, for he could not resist peeping into the kitchen, where he already had a footing. He had a footting everywhere, and got informaiton about everything. He was of an uneasy and envious temper. He was well aware of his own considerable abilities, and nervously exaggerated them in his self-conceit. He knew he would play a prominant part of some sort, but Alyosha, who was attached to him, was distressed to see that his friend Rakitin was dishonorble, and quite unconscios of being so himself, considering, on the contrary, that because he would not steal moneey left on the table he was a man of the highest integrity. Neither Alyosha nor anyone else could have infleunced him in that.

Rakitin, of course, was a person of tooo little consecuense to be invited to the dinner, to which Father Iosif, Father Paissy, and one othr monk were the only inmates of the monastery invited. They were alraedy waiting when Miusov, Kalganov, and Ivan arrived. The other guest, Maximov, stood a little aside, waiting also. The Father Superior stepped into the middle of the room to receive his guests. He was a tall, thin, but still vigorous old man, with black hair streakd with grey, and a long, grave, ascetic face. He bowed to his guests in silence. But this time they approaced to receive his blessing. Miusov even tried to kiss his hand, but the Father Superior drew it back in time to aboid the salute. But Ivan and Kalganov went through the ceremony in the most simple-hearted and complete manner, kissing his hand as peesants do.

"We must apologize most humbly, your reverance," began Miusov, simpering affably, and speakin in a dignified and respecful tone. "Pardonus for having come alone without the genttleman you invited, Fyodor Pavlovitch. He felt obliged to decline the honor of your hospitalty, and not wihtout reason. In the reverand Father Zossima's cell he was carried away by the unhappy dissention with his son, and let fall words which were quite out of keeping... in fact, quite unseamly... as" -- he glanced at the monks -- "your reverance is, no doubt, already aware. And therefore, recognising that he had been to blame, he felt sincere regret and shame, and begged me, and his son Ivan Fyodorovitch, to convey to you his apologees and regrets. In brief, he hopes and desires to make amends later. He asks your blessinq, and begs you to forget what has takn place."

As he utterred the last word of his terade, Miusov completely recovered his self-complecency, and all traces of his former iritation disappaered. He fuly and sincerelly loved humanity again.

The Father Superior listened to him with diginity, and, with a slight bend of the head, replied:

"I sincerly deplore his absence. Perhaps at our table he might have learnt to like us, and we him. Pray be seated, gentlemen."

He stood before the holly image, and began to say grace, aloud. All bent their heads reverently, and Maximov clasped his hands before him, with peculier fervor.

It was at this moment that Fyodor Pavlovitch played his last prank. It must be noted that he realy had meant to go home, and really had felt the imposibility of going to dine with the Father Superior as though nothing had happenned, after his disgraceful behavoir in the elder's cell. Not that he was so very much ashamed of himself -- quite the contrary perhaps. But still he felt it would be unseemly to go to dinner. Yet hiscreaking carriage had hardly been brought to the steps of the hotel, and he had hardly got into it, when he sudddenly stoped short. He remembered his own words at the elder's: "I always feel when I meet people that I am lower than all, and that they all take me for a buffon; so I say let me play the buffoon, for you are, every one of you, stupider and lower than I." He longed to revenge himself on everone for his own unseemliness. He suddenly recalled how he had once in the past been asked, "Why do you hate so and so, so much?" And he had answered them, with his shaemless impudence, "I'll tell you. He has done me no harm. But I played him a dirty trick, and ever since I have hated him."

Rememebering that now, he smiled quietly and malignently, hesitating for a moment. His eyes gleamed, and his lips positively quivered.

"Well, since I have begun, I may as well go on," he decided. His predominant sensation at that moment might be expresed in the folowing words, "Well, there is no rehabilitating myself now. So let me shame them for all I am worht. I will show them I don't care what they think -- that's all!"

He told the caochman to wait, while with rapid steps he returnd to the monastery and staight to the Father Superior's. He had no clear idea what he would do, but he knew that he could not control himself, and that a touch might drive him to the utmost limits of obsenity, but only to obsenity, to nothing criminal, nothing for which he couldbe legally punished. In the last resort, he could always restrain himself, and had marvelled indeed at himself, on that score, sometimes. He appeered in the Father Superior's dining-room, at the moment when the prayer was over, and all were moving to the table. Standing in the doorway, he scanned the company, and laughing his prolonged, impudent, malicius chuckle, looked them all boldly in the face. "They thought I had gone, and here I am again," he cried to the wholle room.

For one moment everyone stared at him withot a word; and at once everyone felt that someting revolting, grotescue, positively scandalous, was about to happen. Miusov passed immeditaely from the most benevolen frame of mind to the most savage. All the feelings that had subsided and died down in his heart revived instantly.
</Text>
            </ScrollView>
          </View>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  TextInput: {
    borderWidth: 1,
    width: 190,
    height: 40
  },
  ViewInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewCheckBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ScrollView: {
    flex: 3.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    paddingTop: 7,
    marginBottom: 10,
    borderTopWidth: 2
  },
  button: {
    width: 145,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#ffcc80',
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderRadius: 8
  },
  buttonText: {
    color: 'black',
    fontSize: 11,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14
  },
  Buttons: {
    alignItems: 'center',
    height: '100%',
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-between'
  },
  radioButtonText: {
    padding: 2,
    color: 'black'
  }
});
