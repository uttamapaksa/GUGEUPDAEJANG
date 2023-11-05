import { useState, useEffect } from 'react';
import annyang from 'annyang';

const AnnyangSTT = () => {
  const [texts, setTexts] = useState('');
  const [listening, setListening] = useState(false);

  // annyang 사용 준비
  useEffect(() => {
    if (annyang) {
      // 사용자의 말을 인식하고 결과를 업데이트하는 함수
      annyang.setLanguage('ko');
      const commands = {
        '*text': (userSaidText) => {
          setTexts(userSaidText);
        }
      };
      
      // 명령어를 추가합니다.
      annyang.addCommands(commands);
      
      // 인식이 시작될 때 listening 상태를 true로 설정합니다.
      annyang.addCallback('start', () => setListening(true));
      
      // 인식이 종료될 때 listening 상태를 false로 설정합니다.
      annyang.addCallback('end', () => setListening(false));
      
      // 인식이 시작되면, 사용자에게 알림을 줍니다.
      annyang.addCallback('soundstart', () => console.log('Sound detected'));
      
      // 에러 핸들링
      annyang.addCallback('error', (err) => console.log('Error:', err));

      return () => {
        annyang.removeCommands();
        annyang.abort();
      };
    }
  }, []);

  // 음성 인식을 시작하는 함수
  const startListenings = () => annyang.start({ autoRestart: false, continuous: true });

  // 음성 인식을 중지하는 함수
  const stopListenings = () => annyang.abort();

  return { 
    texts, 
    listening, 
    startListenings, 
    stopListenings };
};

export default AnnyangSTT;
