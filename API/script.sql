CREATE DATABASE Promotion_db;
go
USE Promotion_db;
go
CREATE TABLE Promo_tlb (
    Id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    CreatedDate DATETIME,
    CreatedUser  varchar(255),
    ModifiedDate  DATETIME,
    ModifiedUser varchar(255),
    PromoCode varchar(255),
    Name varchar(255),
    Description varchar(255),
    IsBonusActive BIT
);
go
CREATE TABLE User_tlb (
    Id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    CreatedDate DATETIME,
    CreatedUser  varchar(255),
    ModifiedDate  DATETIME,
    ModifiedUser varchar(255),
    FirstName varchar(255),
    LastName varchar(255),
    Email varchar(255),
    Phonenumber varchar(255),
    Password varbinary(max),
    IsActive BIT,
    PasswordResetCode varchar(255),
    PasswordResetTime DATETIME
);
go
INSERT INTO Promo_tlb (Name,PromoCode,Description,IsBonusActive)
VALUES ('Sitecostructor.io','itpromocodes','Sitecostructor.io',0);
go
INSERT INTO Promo_tlb (Name,PromoCode,Description,IsBonusActive)
VALUES ('Appvision.com','itpromocodes','Appvision.com',0);