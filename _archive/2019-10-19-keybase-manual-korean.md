---
layout: post
title: "키베이스 (Keybase) 메뉴얼"
date: 2019-10-24 20:00:00
image: https://jeesunikim.keybase.pub/keybase_manual_korean/keybase.png
desc: 한국 분들을 위한 키베이스 메뉴얼.
categories: [code]
---

<h2>키베이스 메뉴얼</h2>

<p>키베이스는 키 디렉토리라고해서 소셜미디어의 신분을 암호화된 키와 연결하여 신분을 쉽게 확인할수있는 서비스를 제공하는 회사입니다. 신분 증명같은건데요. 온라인에서 대화하고있는 사람이 내가 생각하는 그 사람이 맞는지 확인하기 위해 생겨진 서비스입니다. 그렇게 데뷔하여 몇년 후에 파일 저장소랑 채팅, git 저장소 그리고 크립토 월렛 (Bitcoin, Zcash, and Stellar) 서비스를 제공하기 시작한 회사입니다.</p>

<p>2017년 채팅 서비스가 시작해서 아직 외국어 언어지원은 없어서 영어만 가능합니다. 그래서 공식 <a href="https://www.stellar.org/" target="_blank">Stellar (스텔라)</a> 팀하고 대화하고 싶으신 분이나 아니면 본인의 개인정보를 보호하기 위해 키베이스를 사용하시고 싶어하시는 한국분들을 위해 메뉴얼을 준비했습니다. 기본 메세지 어플보다 기능이 많아서 이 매뉴얼이 조금이나마 도움이 됐으면 해요!</p>

<p class="is--centered"><strong>목록</strong></p>

<ol class="is--centered">
	<li>디바이스 등록 <strong>(중요한 부분)</strong></li>
	<li>QR 코드로 새 디바이스를 (핸드폰 예) 등록하는 방법</li>
	<li>기본적인 프로필 그리고 사람 검색 방법</li>
	<li>1:1 채팅하는 방법</li>
	<li>팀 (Team) 채팅하는 방법</li>
	<li>채팅 알림 끄는법</li>
	<li>XLM 루멘 송금 방식</li>
	<li>키베이스 파일 - 공개/비공개 파일 저장 그리고 공유하기 (클라우드)</li>
</ol>

<h3 id="devices">디바이스 등록 <strong>(중요한 부분)</strong></h3>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_devices01.jpg" alt="Add Devices" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_devices02.jpg" alt="Add Devices" />
</div>

<p>뜬금없이 왠 디바이스 등록? 키베이스는 다른 어플들하고는 달리 이메일이나 전화번호가 필요하지않습니다. 키베이스는 이용자의 계정을 디바이스, 즉 컴퓨터랑 폰들하고 연결시키는데요. 이렇게 함으로써 메세지를 해독하기 위해 그리고 계정에 들어가기 위해 중요한 키들은 다 디바이스들에 저장되어있습니다. 그 계정의 대한 키들을 Keybase 본인들도 갖고 있지 않아서 연결시킨 폰이랑 컴퓨터 모두 다 잊어버리셨다면 그 계정은 다시 찾을수가 없어요. 이렇게 함으로써 키베이스는 <a href="https://terms.naver.com/entry.nhn?docId=3431427&cid=40942&categoryId=32837" alt="backdoor wiki">backdoor</a>를 허용하지 않고 이용자의 안전을 보장합니다.</p>

<p>최악의 상황을 막기 위해 저는 여러개의 컴퓨터와 핸드폰을 추가하는것은 물론, <strong>"paper key"</strong>를 만들어서 종이에다가 써두어 보관하는것을 추천합니다. 만약에 등록한 컴퓨터와 핸드폰이 없으시더라도 이 paper key로 계정을 다시 찾을 수 있습니다. 위 오른쪽 화면에 있는 <strong>"Create a paper key"</strong> 를 누르시면 Paper Key 가 생성됩니다.</p>

<p>참고로 등록하는 디바이스들은 공개라는거 말씀드리고 싶습니다. <a href="https://keybase.io/jeesunikim/devices" target="_blank">https://keybase.io/jeesunikim/devices</a> 가시면 제가 등록한 디바이스들을 보실수 있는것처럼 비공개가 아닌 <strong>공개</strong> 입니다. 이름은 아무거나 하셔도 돼니깐 이 점 참고해주세요.</p>

<h3 id="new_device">QR 코드로 새 디바이스를 (핸드폰 예) 등록하는 방법</h3>

<p>새 디바이스를 등록하시려면 먼저 이미 등록된 디바이스에서 추가하셔야합니다. 밑에서는 이미 키베이스에 등록되어있는 저의 컴퓨터 "<strong>Personal Jee</strong>" 디바이스를 바탕으로 예를 들었습니다. 키베이스 메뉴에서 "<strong>Devices</strong>" 를 누르신 후 "<strong>Add a device or paper key</strong>"를 클릭하시면 새 창이 뜹니다. 새 창의 "<strong>Add a phone</strong>"을 클릭해주세요.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device.jpg" alt="Add a New Devices" />
</div>

<p>"<strong>Add a phone</strong>"을 클릭하시면 새 창에 QR 코드가 뜹니다. 이 QR 코드를 등록하실 핸드폰으로 찍으실때까지 창에 냅두세요.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device04.jpg" alt="Add a New Devices #4" />
</div>

<p>그 다음 등록하시려는 핸드폰으로 가셔서 키베이스를 다운받으시고 로그인하시면 "<strong>Authorize this phone</strong>" 창이 뜹니다. 여기에서 QR 코드를 준 이미 등록되어있는 "<strong>Personal Jee</strong>" 디바이스 이름을 클릭하시면 "<strong>Name this phone</strong>" 창이 뜹니다.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device02.jpg" alt="Add New Devices #2" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device03.jpg" alt="Add a New Devices #3" />
</div>

<p> 핸드폰 디바이스의 이름을 등록하시고 "Continue"를 클릭하시면 카메라가 자동으로 켜지면서 "<strong>Perosnal Jee</strong>" 컴퓨터로 로그인해서 이 핸드폰을 등록하라는 메세지가 뜹니다. 여기에서 아까 켜놓은 QR 코드 창을 등록하시려는 핸드폰 카메라로 찍으시면 핸드폰이 등록됩니다.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device05.jpg" alt="Add New Devices #5" />
</div>

<p>QR 코드를 찍으신 후에 바로 새 디바이스가 등록됩니다.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device06.jpg" alt="Add New Devices #6" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/add_new_device07.jpg" alt="Add a New Devices #7" />
</div>

<h3 id="search">기본적인 프로필 그리고 사람 검색 방법</h3>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/searching_person01.jpg" alt="searching person #1" />
</div>

<p>데스크탑 PC의 경우 좌측 첫번째 아이콘인 얼굴 모양. 모바일 경우 하단에 사람 얼굴 모양을 클릭 및 터치하시면 새로운 탭이 뜨는데요. 검색창에다가는 찾으시는 사용자의 이름을 치시면 결과들이 나옵니다. 찾으신 사용자의 이름을 클릭하시면 그 샤용자의 프로필을 볼수있습니다. 프로필의 오른쪽을 보시면 해당 사람의 세부적인 계정 확인이 나와서 가짜 계정을 구별하기에 유용합니다. 많이 연결시킬수록 좋습니다.</p>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/searching_person02.jpg" alt="searching person #2" />
</div>

<p>트위터처럼 팔로우 맞팔기능 및 1:1 채팅 기본 메세지 기능이 있습니다. <strong>"..."</strong> 을 누르시면 XLM을 보내시거나 요청하실수있습니다. 또한 파일 공유같은 경우 해당 사용자와 "Open private folder" 하면 파일 공유하실수있고 "Browse public folder" 클릭하시면 등록한 공개파일들도 열어볼수있습니다.</p>

<h3 id="chat">1:1 채팅하는 방법</h3>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/newchat_01.jpg" alt="new chat #1" />
</div>

<p>데스크탑 PC의 경우 좌측 두번째 아이콘인 말풍선 모양. 모바일 경우 하단에 사람 말풍선 모양을 클릭 및 터치하시면 새로운 탭이 뜹니다. 맨 처음 시작하실때는 "New chat"을 누르셔서 대화하실 사용자를 찾으시면 돼는데요. 자세한 설명서는 사진에다가 써놓았습니다.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/newchat_02.jpg" alt="new chat #2" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/newchat_03.jpg" alt="new chat #3" />
</div>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/newchat_04.jpg" alt="new chat #4" />
	<p style="color: white;">왼쪽에는 최근 1:1 대화한 사용자들 그리고 팀(team) 들이 1:1 사용자들 바로밑에 나옵니다. 팀의 대한 설명은 밑에 써놓았습니다.</p>
</div>

<h3 id="team-chat">팀 (Team) 채팅하는 방법</h3>

<p>키베이스의 팀(Team)은 텔레그램에의 Group이라고 생각하시면 됩니다. 여러사람들이 모여서 채팅을 할수있는 방법이죠. 텔레그램하고 다른 점은 팀안에 세부적인 주제에 맞게 대화 채널을 오픈하실수있습니다. 밑에 보시면 <strong>stellar.public</strong> 이랑 <strong>stellar_kr</strong>는 밑에 보이는 채널보다 훨씬 더 많은 채널을 가지고있지만 저는 저의 취향에 맞게 소수만 골랐습니다. 팀 안에 <strong>"#"</strong>으로 시작되는 것들은 전부 채널입니다. 토론하고 싶은 주제가 있는 채널에 들어가서 대화를 할수있는거죠. 예를들어 Stellar 개발에 관해서 토론하고 싶으시다면 "#dev-discussion"에 참가하셔서 토론하시면 됩니다. 만약 해당 팀에 몇개의 대화채널이 오픈되어있는지 알고싶으시다면, 팀명 우측에 나타나는 톱니바퀴 모양을 클릭하신후 "manage chat channels"에서 체크하시면서 대화채널을 고르시면 됩니다.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/team.jpg" alt="team" />
</div>

<p>팀에 참여할수있는 방법들은 몇가지가 있는데요. <strong>참여하고싶으신 팀의 이름을 아실경우</strong> 왼쪽 메뉴 "Teams"을 클릭, 오른쪽 상단에 있는 "Join a team"을 클릭하시면 참여하고 싶으신 팀의 이름을 넣으시면 됩니다. </p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/join_team01.jpg" alt="join team" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/join_team02.jpg" alt="join team #2" />
</div>

<p><strong>팔로우하는 사용자의 팀에 참가 하고싶다 그리고 그 팀이 사용자의 프로필에 나와있다</strong>면 팔로우하는 사용자의 프로필에 들어가셔서 Teams 밑부분의 링크를 클릭하시면 "View team" 버튼이 나오는데요. 거기를 클릭하시면 그 팀의 정보랑 참여할수있는지를 보여줍니다.</p>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/profile_team.jpg" alt="profile team" />
</div>

<p>팀에 참여하고나서 위의 프로필처럼 참여한 팀 목록을 프로필에 추가하시고 싶으시다면 팀 옆에나타나는 톱니바퀴 클릭하세요.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/view_team.jpg" alt="view team" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/profile_team_add01.jpg" alt="profile team add" />
</div>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/profile_team_add02.jpg" alt="view team" />
</div>

<h3 id="mute">채팅 알림 끄는법</h3>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/mute_notifications.jpg" alt="view team" />
</div>

<h3 id="wallet">XLM 루멘 송금 방식</h3>

<p>XLM 루멘 송금은 1:1 대화 뿐만 아니라 전체 대화 채널에서도 주고 받을수있습니다. 송금을 하기위해서는 Wallet이 있어야 하는데요. 왼쪽 메뉴 Wallet 을 클릭하시면 만드실수있습니다.</p>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/wallet.jpg" alt="wallet" />
</div>

<p>먼저 1:1 채팅에서 루멘을 보내고 싶으시다면 채팅 채널 하단에 <strong>"$"</strong> 클릭하시고 <strong>Send Lumens (XLM)</strong> 클릭하세요. 루멘은 물론 다른 통화로 설정해서 변경이 가능합니다. 저는 여기서 원으로 보내볼게요.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens01.jpg" alt="send lumens" />
</div>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens02.jpg" alt="send lumens #2" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens03.jpg" alt="send lumens #3" />
</div>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens04.jpg" alt="send lumens #4" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens05.jpg" alt="send lumens #5" />
</div>

<div class="project-image color--dark">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens_06.jpg" alt="send lumens #6" />
	<p style="color: white;">루멘을 주고 받으면 채팅상에서 루멘 주고받은 거래가 나타납니다.</p>
</div>

<p>또다른 송금 방법은 사용자이름을 채팅안에 써서보내기.. 예를들어 단체 채팅에서 특정인에게 100XLM 및 1만원을 보내고 싶으시다면 <strong>+100XLM@{사용자이름}</strong> 다른 통화로도 가능합니다 <strong>+1000KRW@{사용자이름}</strong>.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens_other.jpg" alt="send lumens with username" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/msg_lumens_other_02.jpg" alt="send lumens with username" />	
</div>

<h3 id="files">키베이스 파일 - 공개/비공개 파일 저장 그리고 공유하기 (클라우드)</h3>

<p>키베이스의 또다른 기능은 클라우드 기능인데요. 250 GB 상당의 파일들을 공짜로 키베이스 파일에 올릴수있습니다. 예를들어 여기에 나와있는 모든 사진들은 다 키베이스 public 에 저장되어있는 사진들입니다 (<a href="https://keybase.pub/jeesunikim/keybase_manual_korean/" target="_blank">키베이스의 저장되어있는 이 블로그 포스트 사진들</a>). 사적인 자료들은 private 폴더에 보관하세요. 밑에 모자이크 처리된곳에는 팀 그리고 채팅 사용자랑 파일/폴더 공유가 가능합니다.</p>

<div class="project-image color--dark inline">
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/files.jpg" alt="files" />
	<img src="https://jeesunikim.keybase.pub/keybase_manual_korean/files_02.jpg" alt="files #2" />	
</div>

<p class="is--centered">너무나도 많은 기능들이 있는 키베이스.<br/>인터페이스 익숙해지실때까지 시간이 걸리시거나 아니면 질문이있으신 분들은 <a href="https://twitter.com/codeandfood/" target="_blank">트위터</a> 혹은 이미 키베이스를 설치하셨으면 <a href="https://keybase.io/jeesunikim/" target="_blank">키베이스</a>로 궁금하신거 있으시면 물어보세요!<br/>빠른 시일 내에 대답드릴게요.</p>

<p class="is--centered"><strong><a href="https://keybase.io/download" target="_blank">키베이스 다운받기</a></strong></p>

<h1 class="is--centered">끝</h1>
