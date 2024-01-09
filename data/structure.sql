CREATE TABLE IF NOT EXISTS teams 
(
  id INT NOT NULL AUTO_INCREMENT,
  activity text NOT NULL,
  domain TEXT NOT NULL,
  details TEXT NOT NULL,
  status TEXT NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;