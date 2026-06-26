(() => {
  const historyContexts = {
    'did_intro.html': '双重差分的核心直觉来自政策评估中的“前后比较”，但它真正成熟于自然实验与面板数据的结合：研究者不只问政策后是否变化，而是将处理组与对照组的变化再做一次差分，以逼近未受政策影响的反事实。个体固定效应与时间固定效应使这种比较能够净化稳定差异和共同冲击；平行趋势则成为识别能否成立的关键。近年的讨论进一步指出，在分批实施政策下，传统双向固定效应 DID 可能把不同处理时点的单位互作对照，从而混合甚至扭曲动态效应。因此，现代 DID 更强调处理时点、比较组构成与事件时间系数的透明呈现。',
    'event_study_intro.html': '事件研究最早在金融学中用于观察股价如何围绕信息披露快速调整，后来逐步成为政策评估中描绘动态效应的常用工具。它将政策发生时点作为参照，把政策前后多个时期的系数逐一展开：政策前的估计帮助判断处理组与对照组是否具有相近趋势，政策后的估计则显示影响是即时出现、逐渐累积还是短暂消退。随着 DID 被广泛用于分批处理场景，事件研究也不再只是“画一张系数图”；研究者需要谨慎选择基准期、处理尚未发生的对照组和估计器，避免双向固定效应把不同时点的已处理单位当作不恰当的对照。',
    'fixed_effects_intro.html': '固定效应模型的学术脉络可追溯到面板数据分析中对“不可观测异质性”的处理。社会科学研究常面对这样的问题：地区禀赋、组织文化或个体特质难以完整测量，却会同时影响解释变量和结果。个体固定效应通过只利用同一单位随时间的变化，将这些稳定差异从比较中扣除；时间固定效应则吸收所有单位共同经历的宏观冲击。两者结合形成双向固定效应，成为政策评估与比较研究的基础工具。它并不自动解决所有内生性，而是清楚界定了它能控制的部分：不随时间变化的遗漏因素，而非随时间同步变化的混杂。',
    'iv_intro.html': '工具变量方法源于经济计量学对内生性问题的长期回应：当教育、政策参与或治理能力等核心解释变量与未观测因素纠缠在一起，直接回归难以给出可信因果解释。IV 的策略不是假装消除全部偏误，而是寻找一个能推动处理变量变化、却不直接影响结果的外生来源。相关性与排除限制由此成为两项核心要求；工具变量很弱时，估计会不稳定且常规推断会失真。随着方法进入政治学、公共管理和社会学，研究重心也从“有没有一个工具”转向制度机制是否可信、影响路径是否可辩护，以及所识别效应究竟适用于哪些被工具推动改变行为的单位。',
    'psm_intro.html': '倾向得分匹配产生于观察性研究对“选择偏差”的关切：接受政策、项目或待遇的人往往本来就与未接受者不同。它把多项可观测协变量压缩为接受处理的条件概率，再在相近倾向得分的个体间建立比较，以减少样本构成不平衡。该方法曾在公共政策、医学和社会科学中迅速普及，也促使研究者更重视协变量平衡、共同支持和诊断图表。与此同时，方法论争论反复提醒我们：匹配只能处理已观测的混杂，不能凭空消除未观测选择；它更像让比较更接近研究设计的准备步骤，而不是替代清晰识别假设的因果证明。',
    'rdd_intro.html': '断点回归设计是在准实验传统中发展起来的识别策略。许多公共制度按考试分数、收入线、年龄或资格阈值分配资源；断点附近的单位极其相似，却可能因刚好跨过规则而接受不同处理。RDD 正是把这种制度化的“近似随机”作为因果比较的依据，并将结论限定在断点附近的局部效应。它的发展也使研究者从简单比较两侧均值，转向检验密度是否操纵、协变量是否连续、带宽如何选择及函数形式是否稳健。其说服力来自制度规则与局部比较，而不是复杂模型本身；离断点很远的外推仍需格外克制。',
    'scm_intro.html': '合成控制法兴起于比较案例与政策评估的交汇处，特别适合只有一个地区、城市或国家受到重要冲击的情形。与其从许多控制单位中任取平均，SCM 根据干预前的结果路径和特征为供体单位分配权重，构造一个最像处理单位的“合成对照”。这种思路把反事实构建过程变得可视化，也推动研究者关注干预前拟合、供体池选择和安慰剂检验。它并非凭权重自动产生因果结论：若干预前无法拟合，或供体单位受到相同冲击，解释就会变弱。近年扩展方法进一步回应了少数处理单位、预测误差和不确定性评估等现实问题。',
    'sem_intro.html': '结构方程模型的发展连接了心理学、教育学与社会学中两类长期任务：一是测量那些不能直接观察的概念，二是检验这些概念之间的理论关系。早期路径分析提供了变量关系的图式表达，随后确认性因子分析使潜变量的测量模型得以被明确检验；SEM 则把测量模型和结构模型整合在同一框架中。它的流行也带来重要提醒：漂亮的拟合指标不能替代理论，潜变量命名不能代替测量效度，横截面关联更不能自动证明因果方向。有效的 SEM 研究应先说明概念、指标与识别条件，再讨论路径系数与整体拟合。',
    'mediation_moderation_intro.html': '中介与调节分析源于研究者对“效应为何发生、何时发生”的持续追问。中介模型试图把总效应分解为经由某一变量传递的路径；调节模型则考察关系是否随群体、环境或制度条件而改变。它们在心理学、组织研究与政策研究中被广泛用于机制叙事，也越来越多地进入因果推断的讨论。一个关键方法论界线是：统计上出现显著间接效应，并不等于已经证明真实因果机制，因为中介变量本身可能受未测混杂、处理后偏差或测量误差影响。因而机制分析应与研究设计、时间顺序和替代解释检验结合，而不只是多加入几个回归项。',
    'spatial_econometrics_intro.html': '空间计量的发展来自地理学、区域经济学与城市研究对“邻近并非独立”的共同发现。一个地区的污染、经济增长、公共服务或政治行为常会通过流动、模仿、竞争与扩散影响周边地区，普通回归中相互独立的观测假设因而受到挑战。空间自相关、空间滞后和空间误差模型逐渐形成了一套处理邻接结构的工具箱，并进入公共管理和政策扩散研究。它们的价值不在于给模型加上地图，而在于明确何种联系构成空间权重、溢出通过何种机制发生。若权重矩阵只是技术选择、理论联系却含混，空间系数也难以作出有力解释。',
    'text_analysis_causal_inference_intro.html': '文本分析经历了从人工编码到计算文本分析的扩展。早期内容分析依靠明确的编码规则与人工判断，重视分类的一致性；数字资料的大规模增长则推动词频、主题模型、词向量和监督学习进入社会科学。文本既可以是因变量，用来观察叙事如何变化；也可以是自变量，刻画政策沟通、意识形态或信息暴露；还可以成为机制证据，帮助追踪行动者如何理解和传播政策。与因果推断结合时，关键不在于算法是否复杂，而在于文本测量是否有效、训练与验证是否透明，以及文本变量在因果时间顺序中究竟处于处理之前、之后还是机制环节。',
    'social_network_analysis_intro.html': '社会网络分析的思想根源横跨社会计量学、图论与结构社会学。它打破了只用个体属性解释结果的习惯，转而关注关系如何塑造信息、资源与权力的流动。早期社会计量研究提供了描绘关系的工具，图论带来节点与连边的形式语言，随后“弱关系”与“结构洞”等理论说明网络位置能够创造不同机会。网络研究的发展也使研究者警惕：网络往往同时受到选择和影响的共同作用，观察到相似的朋友并不能直接推出相互影响。因此，定义关系边界、收集网络形成过程，并区分同质性、共同环境与扩散机制，始终是解释网络结果的核心。',
    'double_machine_learning_intro.html': '双重机器学习出现于机器学习与因果推断逐渐交汇的背景下。高维协变量、非线性关系和复杂预测任务使传统参数模型难以充分控制混杂，而单纯追求预测准确率又不能替代因果识别。DML 的关键贡献是把机器学习用于估计处理模型和结果模型等干扰部分，再通过正交化构造对这些估计误差不敏感的目标方程，并以样本分割减少过拟合。它因此服务于高维控制下的因果参数估计，而非让算法“自动发现因果”。研究者仍须说明处理定义、可忽略性或其他识别条件，并检查重叠性；没有可信研究设计，交叉拟合也无法把相关性变成因果性。',
    'bayesian_inference_intro_fixed.html': '贝叶斯推断的历史始于用条件概率更新不确定性的思想，随后经由 Laplace 等人的发展，形成了用先验分布和观测数据得到后验判断的框架。它与频率主义统计在二十世纪长期并行并争论，分歧集中在概率应如何解释、参数是否可以被视为不确定对象，以及推断应依赖长期重复还是信息更新。计算曾经限制贝叶斯方法的普及，直到 MCMC 等模拟技术使复杂后验分布可以被近似计算，贝叶斯模型才在社会科学中获得更广泛应用。它的优势不是可以主观任意设定，而是要求清楚呈现先验、似然和敏感性，让已有知识与新证据的结合可被检验与讨论。',
    'case_study_process_tracing_intro.html': '案例研究与过程追踪在 KKV 之后的质性方法论讨论中获得了更精细的表达。争论不再只围绕案例数量够不够，而转向案例内部的证据如何支持或削弱机制主张：行动者的决策、制度变化与关键事件能否连成一条可检验的因果链。相关研究强调不同证据具有不同辨识力，也讨论案例选择、等效解释和概念界定会如何影响结论。过程追踪因此不是把故事讲得更完整，而是将理论预期与可观察证据逐项对照。它与比较案例、统计分析可以互补：前者帮助理解过程，后者帮助把握范围；两者都需要对替代解释保持开放。'
  };

  function initFilters() {
    const search = document.querySelector('#method-search');
    const cards = [...document.querySelectorAll('.method-card')];
    const categoryButtons = [...document.querySelectorAll('[data-category]')];
    const difficultyButtons = [...document.querySelectorAll('[data-difficulty]')];
    const count = document.querySelector('#result-count');
    const empty = document.querySelector('#empty-state');
    if (!search || !cards.length) return;
    let category = 'all';
    let difficulty = 'all';
    const update = () => {
      const needle = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const match = (category === 'all' || card.dataset.category === category) &&
          (difficulty === 'all' || card.dataset.difficulty === difficulty) &&
          (!needle || card.dataset.search.toLocaleLowerCase().includes(needle) || card.textContent.toLocaleLowerCase().includes(needle));
        card.hidden = !match;
        if (match) visible += 1;
      });
      count.textContent = `显示 ${visible} 种方法`;
      empty.hidden = visible !== 0;
    };
    categoryButtons.forEach((button) => button.addEventListener('click', () => {
      category = button.dataset.category;
      categoryButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      update();
    }));
    difficultyButtons.forEach((button) => button.addEventListener('click', () => {
      difficulty = button.dataset.difficulty;
      difficultyButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      update();
    }));
    search.addEventListener('input', update);
  }

  function initLecture() {
    if (!document.body || document.querySelector('.site-home-link')) return;
    if (!document.querySelector('link[rel="icon"]')) {
      const icon = document.createElement('link');
      icon.rel = 'icon';
      icon.type = 'image/svg+xml';
      icon.href = 'assets/favicon.svg';
      document.head.append(icon);
    }
    const home = document.createElement('a');
    home.className = 'site-home-link';
    home.href = 'index.html';
    home.setAttribute('aria-label', '返回社会科学研究方法导航首页');
    home.innerHTML = '<span aria-hidden="true">←</span> 返回首页';
    document.body.prepend(home);
    const filename = decodeURIComponent(location.pathname.split('/').pop() || '');
    const text = ['bayesian_inference_intro_fixed.html', 'double_machine_learning_intro.html', 'case_study_process_tracing_intro.html'].includes(filename) ? '' : historyContexts[filename];
    if (!text) return;
    const section = document.createElement('section');
    section.className = 'academic-context';
    section.setAttribute('aria-label', '学术历史脉络');
    section.innerHTML = `<h2>学术历史脉络</h2><p>${text}</p>`;
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (main) main.append(section);
    else if (footer) footer.before(section);
    else document.body.append(section);
  }

  function init() {
    if (document.body.classList.contains('index-page')) initFilters();
    else initLecture();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
