(this.webpackJsonpguessy=this.webpackJsonpguessy||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s(0),c=s.n(r),a=s(5),o=s.n(a),u=s(4),d=(s(40),s(6)),i=s(7),l=s(11),h=s(10),j=(s(41),s(25)),b=s.n(j),p=s(9);var g="CORRECT_GUESS",O="GUESS_WORD",f="SET_SECRET_WORD",m=function(e){var t;if(0===e.guessedWords.length)t=Object(n.jsx)("p",{className:"rules","data-test":"guess-instructions",children:"Try to guess the secret word! Matching letters might not be in the same order as your guess."});else{var s=e.guessedWords.map((function(e,t){return Object(n.jsxs)("tr",{className:"body-row","data-test":"guessed-word",children:[Object(n.jsx)("td",{children:e.guessedWord}),Object(n.jsx)("td",{children:e.letterMatchCount})]},t)}));t=Object(n.jsxs)("div",{"data-test":"guessed-words",children:[Object(n.jsx)("h3",{children:"Guessed Words"}),Object(n.jsxs)("table",{className:"table table-sm",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Guess"}),Object(n.jsx)("th",{children:"Matching Letters"})]})}),Object(n.jsx)("tbody",{children:s})]})]})}return Object(n.jsx)("div",{"data-test":"component-guessed-word",children:t})},v=function(e){return e.success?Object(n.jsx)("div",{"data-test":"component-congrats",className:"alert alert-success",children:Object(n.jsxs)("span",{"data-test":"congrats-message",children:[" ","Congratulations! You guessed the word!"]})}):Object(n.jsx)("div",{"data-test":"component-congrats"})},x=s(8),y=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={currentGuess:""},n.submitGuessedWord=n.submitGuessedWord.bind(Object(x.a)(n)),n}return Object(i.a)(s,[{key:"submitGuessedWord",value:function(e){e.preventDefault();var t=this.state.currentGuess;t&&t.length>0&&(this.props.guessWord(t),this.setState({currentGuess:""}))}},{key:"render",value:function(){var e=this,t=this.props.success?null:Object(n.jsxs)("form",{form:"form-inline",children:[Object(n.jsx)("input",{"data-test":"input-box",className:"mx-sm-3",type:"text",value:this.state.currentGuess,onChange:function(t){return e.setState({currentGuess:t.target.value})},placeholder:"enter guess"}),Object(n.jsx)("button",{"data-test":"submit-button",onClick:function(t){return e.submitGuessedWord(t)},type:"submit",className:"btn btn-primary",children:"Submit"})]});return Object(n.jsxs)("div",{"data-test":"component-input",children:[" ",t]})}}]),s}(r.Component),W=Object(u.b)((function(e){return{success:e.success}}),{guessWord:function(e){return function(t,s){var n=s().secretWord,r=function(e,t){var s=new Set(t.split("")),n=new Set(e.split(""));return Object(p.a)(s).filter((function(e){return n.has(e)})).length}(e,n);t({type:O,payload:{guessedWord:e,letterMatchCount:r}}),e===n&&t({type:g})}}})(y),w=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.props.getSecretWord()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Guessy"}),Object(n.jsx)(v,{success:this.props.success}),this.props.secretWord?Object(n.jsx)(W,{}):null,Object(n.jsx)(m,{guessedWords:this.props.guessedWords})]})}}]),s}(r.Component),G=Object(u.b)((function(e){return{success:e.success,secretWord:e.secretWord,guessedWords:e.guessedWords}}),{getSecretWord:function(){var e={method:"GET",url:"https://wordsapiv1.p.rapidapi.com/words/",params:{random:"true"},headers:{"x-rapidapi-key":"93e8630dcbmsh1832a7e3e2a2173p1147c7jsn9b7e1c05bb50","x-rapidapi-host":"wordsapiv1.p.rapidapi.com"}};return function(t){b.a.request(e).then((function(e){var s=e.data.word.split(" ");console.log(e.data),console.log(s[0]),t({type:f,payload:s[0]})})).catch((function(e){console.error(e)}))}}})(w),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,60)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))},C=s(3),k=s(26),E=Object(C.c)({success:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return!0;default:return e}},guessedWords:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return[].concat(Object(p.a)(e),[t.payload]);default:return e}},secretWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;default:return e}}}),N=[k.a],T=C.a.apply(void 0,N)(C.d)(E);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(u.a,{store:T,children:Object(n.jsx)(G,{})})}),document.getElementById("root")),S()}},[[59,1,2]]]);
//# sourceMappingURL=main.7313b191.chunk.js.map