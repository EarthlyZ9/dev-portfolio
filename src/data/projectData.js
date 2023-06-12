import { HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi';

const projectData = [
    {
        path: 'bruteforce',
        title: '개발자의 길이 열리다, Bruteforce',
        filename: 'Bruteforce.md',
        subtitle: 'Django 로 시작한 웹풀스택 개발',
        description:
            '너도 할 수 있어! 코딩 학습의 진입 장벽을 낮추기 위한 교육 사업 Bruteforce, 더불어 공부하는 힘을 되살리다',
        date: '2021.07 ~ 2021.12',
        icon: <HiOutlineUser />,
        color: '#323442',
        textColor: 'white',
        complete: true,
    },
    {
        path: 'groovy',
        title: '대학생들의 링크드인, 그 첫걸음 Groovy',
        filename: 'Groovy.md',
        subtitle: 'DRF 로 시작된 백엔드 개발자로서의 꿈',
        description:
            '다들 뭐하고 살지...? 대학생들은 레퍼런스가 부족해! 진로에 대해 고민하는 새로운 방법을 제시하다',
        date: '2022.01 ~ 2022.06',
        icon: <HiOutlineUserGroup />,
        color: '#4b51ba',
        textColor: 'white',
        complete: true,
    },
    {
        path: 'icaan',
        title: 'ICAAN 프로젝트의 SW 연구원',
        filename: 'ICAAN.md',
        subtitle: '설계부터 배포까지, React + Node.js + MongoAtlas',
        description:
            '질병관리청 국립보건연구원 주관 ICAAN 프로젝트의 어드민 페이지와 피험자 웹앱 구현을 도맡다!',
        date: '2022.05 ~ 2022.12',
        icon: <HiOutlineUserGroup />,
        color: '#FFBF36',
        textColor: 'black',
        complete: true,
    },
    {
        path: 'space-gem',
        title: 'Space Gem',
        filename: 'SpaceGem.md',
        subtitle: 'Unity 로 배우는 C#',
        description: 'C# 과 유니티로 만들어보는 레트로 캐주얼 게임 Space Gem',
        date: '2022.10',
        icon: <HiOutlineUser />,
        color: '#2fd8e8',
        textColor: 'black',
        complete: true,
    },
    {
        path: 'fruit-ninja',
        title: 'Fruit Ninja 3D',
        filename: 'FruitNinja.md',
        subtitle: 'Unity 로 배우는 C# 2',
        description:
            'Fruit Ninja 게임을 벤치마킹한 3D Hand Recognition 버전의 새로운 3D 게임',
        date: '2022.12',
        icon: <HiOutlineUserGroup />,
        color: '#a3d28e',
        textColor: 'black',
        complete: true,
    },
    {
        path: 'bistime',
        title: '우리의 시간을 소중하게, BisTime',
        filename: 'BisTime.md',
        subtitle: '비는 시간이 언제인가요?',
        description:
            '모임 시간을 똑똑하게, 간단한 모임부터 팀의 효율적인 일정 관리까지 책임집니다!',
        date: '2023.01 ~',
        icon: <HiOutlineUserGroup />,
        color: '#6db49b',
        textColor: 'black',
        complete: true,
    },
    {
        path: 'pintalk',
        title: '누구나 간편하게, PinTalk',
        filename: 'PinTalk.md',
        subtitle: 'Put a pin anywhere!',
        description: 'Django Channels 를 이용해 채팅 서비스 개발해보기',
        date: '2023.01 ~ 2023.04',
        icon: <HiOutlineUserGroup />,
        color: '#2F80ED',
        textColor: 'white',
        complete: true,
    },
    {
        path: 'aws-cdk-ml',
        title: 'AWS CDK 를 사용한 머신러닝 모델 배포',
        filename: 'CDK_ML.md',
        subtitle: 'AWS CDK - Lambda Function',
        description: '파이썬 CDK 를 이용하여 AWS 리소스 생성하고 관리하기',
        date: '2023.02',
        icon: <HiOutlineUser />,
        color: '#f57a4f',
        textColor: 'black',
        complete: true,
    },
    {
        path: 'bk-nutrition',
        title: '연세대 BK 연구실의 홈페이지 새단장',
        filename: 'BK_Nutrition.md',
        subtitle: '+ FastAPI 프레임워크에 대한 고민',
        description:
            'FastAPI 를 이용한 백엔드 API 와 Jinja Template 을 이용한 관리자 페이지 개발',
        date: '2023.02 ~  2023.03',
        icon: <HiOutlineUserGroup />,
        color: '#1b46b4',
        textColor: 'white',
        complete: true,
    },
    {
        path: 'convey',
        title: '설문을 대하는 새로운 방법, Convey',
        filename: 'Convey.md',
        subtitle: '+ Eager loading 에 대한 고민',
        description:
            '피험자들을 대상으로 한 연구 설문을 수합하는 과정을\n' +
            '간편화해보자',
        date: '2023.02 ~ 2023.03',
        icon: <HiOutlineUserGroup />,
        color: '#d0b9da',
        textColor: 'black',
        complete: true,
    },
    {
        path: 'step-in',
        title: 'Step-In 으로 빠르게 API 설계하기',
        filename: 'Step_In.md',
        subtitle: 'Spring 프레임워크 입문!',
        description:
            'Top-Down 방식의 아이디에이션을 도와주는 디자인 툴. 큰 Step 에서 시작해서 작은 Step 으로 아이디어를 구체화해보자!',
        date: '2023.04 ~',
        icon: <HiOutlineUser />,
        color: '#ee7c30',
        textColor: 'black',
        complete: true,
    },
];

export default projectData;
