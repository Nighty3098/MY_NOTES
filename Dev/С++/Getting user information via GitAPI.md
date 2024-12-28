---
tags:
  - CPP
---
![[Pasted image 20240530115407.png]]

```cpp
void AccountWindow::setImageFromUrl(const QString &url, QLabel *label)
{
	QNetworkAccessManager *manager = new QNetworkAccessManager(this);
	QNetworkReply *reply = manager->get(QNetworkRequest(QUrl(url)));
	QObject::connect(reply, &QNetworkReply::finished, [=]() {
		if (reply->error()) {
			qDebug() << "Error:" << reply->errorString();
			reply->deleteLater();
			return;
		}
		QPixmap pixmap;
		pixmap.loadFromData(reply->readAll());
		label->setPixmap(pixmap.scaled(300, 300, Qt::KeepAspectRatio, Qt::SmoothTransformation));
		reply->deleteLater();
	});
}
```

```cpp
void AccountWindow::setUserData(const QString &username, QLabel *label)
{
	QNetworkAccessManager *manager = new QNetworkAccessManager(this);
	QUrl url("https://api.github.com/users/" + git_user);
	
	QUrlQuery query;
	query.addQueryItem("login", username);
	url.setQuery(query);
	
	  
	
	QNetworkReply *reply = manager->get(QNetworkRequest(url));
	QObject::connect(reply, &QNetworkReply::finished, [=]() {
		if (reply->error()) {
			qDebug() << "Error:" << reply->errorString();
			reply->deleteLater();
			return;
		}
		
		QJsonDocument doc = QJsonDocument::fromJson(reply->readAll());
		QJsonObject obj = doc.object();
		
		// do something with the user data
		qDebug() << "Name:" << obj["name"].toString();
		qDebug() << "Location:" << obj["location"].toString();
		qDebug() << "Avatar_url:" << obj["avatar_url"].toString();
		qDebug() << "Html_url:" << obj["html_url"].toString();
		qDebug() << "Created_at:" << obj["created_at"].toString();
		qDebug() << "Updated_at:" << obj["updated_at"].toString();
		qDebug() << "Following:" << obj["following"].toInt();
		qDebug() << "Followers:" << obj["followers"].toInt();
		qDebug() << "Public_repos:" << obj["public_repos"].toInt();
		qDebug() << "Bio:" << obj["bio"].toString();
		qDebug() << "Company:" << obj["company"].toString();
		qDebug() << "Login:" << obj["login"].toString();
		qDebug() << doc;
		
		  
		
		profileInfo->setText(obj["name"].toString() + "\n\n" +  ["company"].toString() + "\n\n" + obj["bio"].toString() + "\nPublic repos: " + QString::number(obj["public_repos"].toInt()) + "\n\nFollowing: " + QString::number(obj["following"].toInt()) + "\n\nFollowers: " + QString::number(obj["followers"].toInt()));
		
		setImageFromUrl(obj["avatar_url"].toString(), profilePicture);
		reply->deleteLater();
	});
}
```