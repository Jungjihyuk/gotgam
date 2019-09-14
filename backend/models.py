# coding: utf-8
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Destination(db.Model):
    __table_name__ = 'destination'

    d_id = db.Column(db.Integer, primary_key=True)
    dl_id = db.Column(db.ForeignKey('destination_list.dl_id'), nullable=False)
    title = db.Column(db.Numeric, nullable=False)
    contents = db.Column(db.Text, nullable=False)
    transport = db.Column(db.Text)
    restaurant = db.Column(db.Text)
    latitude = db.Column(db.Float, nullable=False)
    longtitude = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    day = db.Column(db.Integer, nullable=False)

    dl = db.relationship('DestinationList', primaryjoin='Destination.dl_id == DestinationList.dl_id', backref='destinations')


class DestinationList(db.Model):
    __table_name__ = 'destination_list'

    dl_id = db.Column(db.Integer, primary_key=True)
    g_id = db.Column(db.ForeignKey('gotgam.g_id'), nullable=False)

    g = db.relationship('Gotgam', primaryjoin='DestinationList.g_id == Gotgam.g_id', backref='destination_lists')


class Gotgam(db.Model):
    __table_name__ = 'gotgam'

    g_id = db.Column(db.Integer, primary_key=True)
    u_id = db.Column(db.ForeignKey('user.u_id'), nullable=False)
    title = db.Column(db.Numeric, nullable=False)
    contents = db.Column(db.Text, nullable=False)
    companion_num = db.Column(db.Integer, nullable=False)
    travel_days = db.Column(db.Integer, nullable=False)
    weather = db.Column(db.Numeric, nullable=False)
    dest_list = db.Column(db.Integer, nullable=False)
    emotion = db.Column(db.Numeric, nullable=False)
    photo = db.Column(db.Text, nullable=False)

    u = db.relationship('User', primaryjoin='Gotgam.u_id == User.u_id', backref='gotgams')


class Profile(db.Model):
    __table_name__ = 'profile'

    p_id = db.Column(db.Integer, primary_key=True)
    u_id = db.Column(db.ForeignKey('user.u_id'), nullable=False)
    g_like = db.Column(db.Integer)
    d_like = db.Column(db.Integer)

    u = db.relationship('User', primaryjoin='Profile.u_id == User.u_id', backref='profiles')


class Region(db.Model):
    __table_name__ = 'region'

    r_id = db.Column(db.Integer, primary_key=True)
    d_id = db.Column(db.ForeignKey('destination.d_id'), nullable=False)
    province = db.Column(db.Numeric, nullable=False)
    city = db.Column(db.Numeric, nullable=False)

    d = db.relationship('Destination', primaryjoin='Region.d_id == Destination.d_id', backref='regions')


t_sqlite_sequence = db.Table(
    'sqlite_sequence',
    db.Column('name'),
    db.Column('seq')
)


class User(db.Model):
    __table_name__ = 'user'

    u_id = db.Column(db.Integer, primary_key=True)
    id = db.Column(db.Numeric, nullable=False)
    pwd = db.Column(db.Numeric, nullable=False)
    name = db.Column(db.Numeric, nullable=False)
    phone_num = db.Column(db.Numeric, nullable=False)
    address = db.Column(db.Text, nullable=False)
    gender = db.Column(db.Numeric, nullable=False)
