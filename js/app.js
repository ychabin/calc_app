let displayNum = document.getElementById('display_num');

function getNumber(value){
  displayNum.textContent += value;
}

// 計算式を記録するエレメントです。
let displaySym = document.getElementById('display_sym');

function getNumber(value){
    // alert('入力された値: ' + value); //押したボタンに対応した数値がアラートされる
    if(displayNum.textContent.length === 16){// 数値エリアが16文字なら処理を抜ける
        alert('16桁までです！')
        return;

    }

    if(value === '0'){// 入力キーが0だった場合
        if(displayNum.textContent === '0'){// 数値エリアに0が表示されている場合、処理を抜ける
            return;
    
        }else{
            displayNum.textContent += value;

        }
    }else if(value === '00'){// 入力キーが00だった場合
        if(displayNum.textContent === '' || displayNum.textContent === '0'){// 数値エリアに値が入っていない場合、処理を抜ける
            return;

        }else{
            displayNum.textContent += value;

        }        
    }else if(value === '.'){// 入力キーが.だった場合
        if(displayNum.textContent === ''){// 数値エリアに値が入っていない場合、処理を抜ける
            return;

        }else if(displayNum.textContent.includes('.')){// 数値エリアに.を含む場合、処理を抜ける
            return;

        }else{
            displayNum.textContent += value;
            
        }
    }else{// 入力キーが1-9だった場合
        if(displayNum.textContent === '0'){// 数値エリアが0だった場合
            displayNum.textContent = value;// 数値エリアを上書きする

        }else{
            displayNum.textContent += value;
        }
    }
}

function clearBtn(value){
  displayNum.textContent = "";
}

function allClearBtn(value){
  displayNum.textContent = "";
  displaySym.textContent = "";
}

function backBtn(value){
  displayNum.textContent = displayNum.textContent.slice( 0, -1);
}

// function getCalc(value){
//   displaySym.textContent = displayNum.textContent;
// }

// function getCalc(value){
//   if(displayNum.textContent === ''){// 数値エリアに値が入っていない場合、処理を抜ける
//       return;
//   }

//   if(displaySym.textContent !== ''){// 計算式エリアに値が入っている場合、処理を抜ける
//       return;
//   }

//   displaySym.textContent = displayNum.textContent + value;// 計算式エリアに値を入れる
//   displayNum.textContent = '';// 数値エリアを空にする
// }

// let num1 = function getCalc(value){
//   displaySym.textContent = displayNum.textContent + value;
// };

// function getEqual(value){
//   if (displaySym.textContent !== ""){
//   displaySym.textContent = num1 + displayNum.textContent + value;
//   displayNum.textContent = "";
//   }
// }

function getCalc(value){
    if(displayNum.textContent === ''){// 数値エリアに値が入っていない場合、処理を抜けます。
        return;
    }

    // 計算式エリアに入力値と演算子を追加します。
    displaySym.textContent += displayNum.textContent + value;
    
    // 数値領域を一度クリアします。本来ならここにも計算結果が出るとより良いのですが、処理が複雑になってしまう為、機能を簡易化しています。
    displayNum.textContent = '';
}

function getEqual() {
    // 数値エリアが空の状態でイコール（＝）が押された時は、直前（右端）の演算子を削除します。
if (displayNum.textContent == '') {
    displaySym.textContent = displaySym.textContent.slice(0, -1);
}

    // ×と÷は計算式には使用できない為、置換します。
    displaySym.textContent = displaySym.textContent.replace(/×/g, '*');
    displaySym.textContent = displaySym.textContent.replace(/÷/g, '/');

displayNum.textContent = eval(displaySym.textContent + displayNum.textContent);
    // 計算結果を表示したら計算式を記録する領域を空にします。
    displaySym.textContent = "";
}