import  sound1  from "../../../../assets/audio/AlarmSounds/1.mp3"
import  sound2  from "../../../../assets/audio/AlarmSounds/2.wav"
import  sound3  from "../../../../assets/audio/AlarmSounds/3.mp3"
import  sound4  from "../../../../assets/audio/AlarmSounds/4.wav"
import  sound5  from "../../../../assets/audio/AlarmSounds/5.wav"
import  sound6  from "../../../../assets/audio/AlarmSounds/6.wav"
import  sound7  from "../../../../assets/audio/AlarmSounds/7.wav"
import  sound8  from "../../../../assets/audio/AlarmSounds/8.wav"
import  sound9  from "../../../../assets/audio/AlarmSounds/9.mp3"
import  sound10  from "../../../../assets/audio/AlarmSounds/10.mp3"
import  sound11 from "../../../../assets/audio/AlarmSounds/11.wav"
import  sound12  from "../../../../assets/audio/AlarmSounds/12.wav"




const alarm1 = {
    id: 1,
    sound: sound1,
    selected: "false",
    audio: new Audio(sound1)
}

const alarm2 = {
    id: 2,
    sound: sound2,
    selected: "false",
    audio: new Audio(sound2)
}
const alarm3 = {
    id: 3,
    sound: sound3,
    selected: "false",
    audio: new Audio(sound3)
}

const alarm4 = {
    id: 4,
    sound: sound4,
    selected: "false",
    audio: new Audio(sound4)
}

const alarm5 = {
    id: 5,
    sound: sound5,
    selected: "false",
    audio: new Audio(sound5)
}

const alarm6 = {
    id: 6,
    sound: sound6,
    selected: "false",
    audio: new Audio(sound6)
}

const alarm7 = {
    id: 7,
    sound: sound7,
    selected: "false",
    audio: new Audio(sound7)
}

const alarm8 = {
    id: 8,
    sound: sound8,
    selected: "false",
    audio: new Audio(sound8)
}


const alarm9 = {
    id: 9,
    sound: sound9,
    selected: "false",
    audio: new Audio(sound9)
}

const alarm10 = {
    id: 10,
    sound: sound10,
    selected: "false",
    audio: new Audio(sound10)
}

const alarm11 = {
    id: 11,
    sound: sound11,
    selected: "false",
    audio: new Audio(sound11)
}

const alarm12 = {
    id: 12,
    sound: sound12,
    selected: "false",
    audio: new Audio(sound12)
}



export const AlarmSoundData = () =>  {
    
    return[ alarm1 , alarm2 , alarm3 , alarm4 , alarm5, alarm6 ,alarm7 , alarm8, alarm9,
         alarm10, alarm11, alarm12 ]

}