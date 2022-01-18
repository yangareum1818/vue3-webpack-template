module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": {
        "plugin": "vue/vue3-strongly-recommended",
        "elint": "recommended"
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-comment-content-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }

    // env : 사용 환경 의미
    // extends : 확장 기능 사용
    // parserOptions : 버전과 모듈 사용 여부
    // plugins : 사용되는 플러그인
    // rules : 세부 설정 (규칙) 추가
}
