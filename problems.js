const problems = [
    {
        question: "東1局、ドラは南。何を切る？ (引用元: 現代麻雀技術論)",
        handString: "1m 2m 5m 7m 7m 2p 2p 2p 4p 6p 8p 4s 4s 5s",
        correctAnswer: "1m",
        explanation: "向聴戻しになりますが、断么九を確定させる 12m 辺張落としが良さそうです。"
    },
    {
        question: "東1局、ドラは南。何を切る？ (引用元: 現代麻雀技術論)",
        handString: "2m 3m 4m 5m 1p 1p 3p 4p 7p 9p 6s 7s 7s 8s",
        correctAnswer: "9p",
        explanation: "向聴戻しになりますが、79p 嵌張落としで 2345m、6778s のくっつき狙いが良さそうです。"
    },
    {
        question: "東1局、ドラは南。何を切る？ (引用元: 神様の麻雀『何切る？』)",
        handString: "1m 3m 3m 7m 8m 9m 7p 7p 3s 3s 7s 8s 4z 4z",
        correctAnswer: "7p",
        explanation: "7p または 3s のどちらでも良さそうです。"
    },
    {
        question: "東1局、ドラは四索。何を切る？ (引用元: 麻雀で何切る!?)",
        handString: "3m 4m 4m 6m 7m 8m 0p 5p 7p 8p 9p 1s 2s 5s",
        correctAnswer: "1s",
        explanation: "12s の辺張落としがよいという結果になりました。"
    },
    {
        question: "東1局、ドラは七萬。何を切る？ (引用元: 阿知賀女子学院の「何切る？」)",
        handString: "7m 9m 4p 4p 5p 7p 8p 9p 3s 4s 8s 9s 3z 3z",
        correctAnswer: "4p",
        explanation: "4p を切って、三色を狙いましょう。"
    },
    {
        question: "東1局、ドラは七萬。何を切る？ (引用元: Mリーガー 多井隆晴が出題！)",
        handString: "2m 3m 3m 3p 4p 5p 6p 8p 2s 2s 3s 7s 8s 9s",
        correctAnswer: "8p",
        explanation: "コンピューターの計算結果によると、向聴戻しの 8p 切りで受け入れを増やすのがよいという結果になりました。"
    },
    {
        question: "東1局、ドラは六筒。何を切る？ (引用元: 麻雀で何切る!?)",
        handString: "6m 6m 6m 7m 7m 8m 6p 7p 7p 6s 6s 7s 7s 8s",
        correctAnswer: "7p",
        explanation: "7m または 7p 切りで三色を狙いましょう。"
    }
];