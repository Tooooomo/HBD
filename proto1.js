const bd = [2222, 7, 15]; //生まれた[年, 月, 日]を入力
const openAge = true; //年齢を表示したいならtrue, 隠したいならfalseを入力
const yourName = "とーも"; //"名前"を入力

const currentTimeStamp = new Date();
const currentTime = currentTimeStamp.getTime();
const current = [
  currentTimeStamp.getFullYear(),
  currentTimeStamp.getMonth() + 1,
  currentTimeStamp.getDate(),
];

const calcAge = () => {
  const bdYMD = bd[0] * 10000 + bd[1] * 100 + bd[2];
  const currentYMD = current[0] * 10000 + current[1] * 100 + current[2];
  return Math.floor((currentYMD - bdYMD) / 10000);
};

const calcLeftDays = () => {
  const nextBd = new Date(bd[0] + calcAge() + 1, bd[1] - 1, bd[2]);
  const nextBdTime = nextBd.getTime();
  return Math.ceil((nextBdTime - currentTime) / (1000 * 60 * 60 * 24));
};

const judge = () => {
  let result;
  if (openAge) {
    if (bd[1] === current[1] && bd[2] === current[2]) {
      result = `今日は${yourName}さんの${calcAge()}歳の誕生日です！おめでとう！`;
    } else {
      result = `${yourName}さんの${
        calcAge() + 1
      }歳の誕生日まであと${calcLeftDays()}日です。`;
    }
  } else {
    if (bd[1] === current[1] && bd[2] === current[2]) {
      result = `今日は${yourName}さんの誕生日です！おめでとう！`;
    } else {
      result = `${yourName}さんの誕生日まであと${calcLeftDays()}日です。`;
    }
  }
  return result;
};

console.log(judge());
