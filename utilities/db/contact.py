from utilities.db.db_manager import dbManager


class ContactUs:
    @staticmethod
    def insert_message(message):
        return dbManager.commit(
            f"INSERT INTO contact_us (message) VALUES ('{message}')")
